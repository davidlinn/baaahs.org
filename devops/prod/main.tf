# We live on GCP
terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = ">=5.13.0"
        }
    }
}

provider "google" {
    project = "baaahsorg-prod"
    # Choosing a region is actually kind of annoying. us-west1 is Oregon and generally
    # pretty good, but it lacks some of the AI things in us-central1, which is Iowa.
    # us-west2 might be another good choice because it is LA and Starlink from The Incline
    # does downlink to LA. Plus the Bay Area to LA is a pretty solid backbone, but you can't
    # do AI things there. Since AI is future and we want fast web for the majority of our
    # users we're going with LA for now and other things can be elsewhere as or if needed.
    region  = "us-west2"
}


# One IP address to rule them all. Traffic will be routed by the load
# balancer based on hostname.
resource "google_compute_global_address" "default" {
    name = "lb-ip"
}

# A single cert that covers all our hosts
resource "google_compute_managed_ssl_certificate" "non-prod" {
    name = "non-prod"
    managed {
        # Removing the production servers which currently point at AWS because
        # this seems to be preventing the cert from being issued.
        # domains = ["www.baaahs.org", "static.baaahs.org", "baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
        domains = ["static.baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
    }
}

# ---------------------------------------------------------------------------
# The four backend buckets themselves, each of which needs to have public
# permissions set on it.

resource "google_storage_bucket" "prod" {
    name          = "www.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://www.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

#resource "google_storage_bucket_iam_binding" "prod_public" {
#    bucket = google_storage_bucket.prod.name
#    role   = "roles/storage.objectViewer"
#    members = [
#        "allUsers",
#    ]
#}

resource "google_storage_bucket" "static" {
    name          = "static.baaahs.org"
    location      = "US"

    # In case this bucket gets nuked from terraform, don't kill the content
    force_destroy = false

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
    }
    cors {
        origin          = ["https://static.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

resource "google_storage_bucket" "staging" {
    name          = "staging.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://staging.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}


/* Temporarily removing until quota is increased
resource "google_storage_bucket" "dev" {
    name          = "dev.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://dev.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

*/

locals {
    buckets = ["www", "static", "staging"/*, "dev"*/]
}

resource "google_storage_bucket_iam_binding" "buckets_public" {
    for_each = toset(local.buckets)

    bucket = each.key
    role   = "roles/storage.objectViewer"
    members = [
        "allUsers",
    ]
}

data "google_client_openid_userinfo" "me" {}

resource "google_storage_bucket_iam_binding" "buckets_service_account" {
#    depends_on = [google_project_iam_member.storage_iam]
    for_each = toset(local.buckets)

    bucket = each.key
    role   = "roles/storage.objectAdmin"
    members = [
        "serviceAccount:${data.google_client_openid_userinfo.me.email}",
    ]
}

data "google_client_config" "default" {}

resource "google_project_iam_member" "storage_iam" {
    project = data.google_client_config.default.project
    role    = "roles/storage.admin"
    member  = "serviceAccount:${data.google_client_openid_userinfo.me.email}"
}

# ---------------------------------------------------------------------------
# To be accessible to the load balancer each bucket needs to be exposed
# as a google_compute_backend_bucket as well. This is where we could
# enable cloud CDN for these things, but it's not yet clear what the
# cost or utility would be, so this is more a note for the future.

resource "google_compute_backend_bucket" "prod" {
    name        = "prod"
    bucket_name = google_storage_bucket.prod.name
}

resource "google_compute_backend_bucket" "static" {
    name        = "static"
    bucket_name = google_storage_bucket.static.name
}

resource "google_compute_backend_bucket" "staging" {
    name        = "staging"
    bucket_name = google_storage_bucket.staging.name
}

/* Temporarily removing until quota is increased
resource "google_compute_backend_bucket" "dev" {
    name        = "dev"
    bucket_name = google_storage_bucket.dev.name
}
*/

# ---------------------------------------------------------------------------
# Now we need a url map to get traffic to the right bucket, and eventually
# to the right backends for api things.

resource "google_compute_url_map" "main" {
    name            = "lb-map"
    default_service = google_compute_backend_bucket.prod.id

    # Host rules get us from a hostname to a named path_matcher
    host_rule {
        path_matcher = "prod"
        hosts        = ["www.baaahs.org", "baaahs.org"]
    }

    host_rule {
        path_matcher = "static"
        hosts        = ["static.baaahs.org"]
    }

    host_rule {
        path_matcher = "staging"
        hosts        = ["staging.baaahs.org"]
    }

    /* Temporarily removing until quota is increased
    host_rule {
        path_matcher = "dev"
        hosts        = ["dev.baaahs.org"]
    }
    */

    # Path matchers get us to a backend
    path_matcher {
        name            = "prod"
        default_service = google_compute_backend_bucket.prod.id
    }

    path_matcher {
        name            = "static"
        default_service = google_compute_backend_bucket.static.id
    }

    path_matcher {
        name            = "staging"
        default_service = google_compute_backend_bucket.staging.id
    }

    /* Temporarily removing until quota is increased
    path_matcher {
        name            = "dev"
        default_service = google_compute_backend_bucket.dev.id
    }
    */
}

resource "google_compute_target_https_proxy" "default" {
    name             = "https-proxy"
    url_map          = google_compute_url_map.main.id
    ssl_certificates = [google_compute_managed_ssl_certificate.non-prod.id]
}

resource "google_compute_target_http_proxy" "default" {
    name             = "http-proxy"
    url_map          = google_compute_url_map.main.id
}


resource "google_compute_global_forwarding_rule" "tls" {
    name       = "https-rule"
    ip_address = google_compute_global_address.default.address
    target     = google_compute_target_https_proxy.default.id

    port_range = "443"
}

resource "google_compute_global_forwarding_rule" "plain" {
    name       = "http-rule"
    ip_address = google_compute_global_address.default.address
    target     = google_compute_target_http_proxy.default.id

    port_range = "80"
}
