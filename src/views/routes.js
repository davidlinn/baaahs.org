import React from 'react';

import {
  IndexView,
  Home,
  Customers,
  HireUs,
  Faq,
  Agency,
  CareerListing,
  CareerListingMinimal,
  CareerOpening,
  ContactPage,
  Coworking,
  Elearning,
  Enterprise,
  Service,
  WebBasic,
  DesktopApp,
  Expo,
  Startup,
  DesignCompany,
  MobileApp,
  JobListing,
  Rental,
  CloudHosting,
  Logistics,
  Ecommerce,
  Pricing,
  About,
  HelpCenter,
  HelpCenterArticle,
  PortfolioPage,
  PortfolioMasonry,
  PortfolioGrid,
  CompanyTerms,
  ContactPageSidebarMap,
  ContactPageCover,
  AboutSideCover,
  BlogSearch,
  BlogNewsroom,
  BlogArticle,
  BlogReachView,
  PasswordResetCover,
  PasswordResetSimple,
  SigninSimple,
  SigninCover,
  SignupSimple,
  SignupCover,
  AccountBilling,
  AccountGeneral,
  AccountNotifications,
  AccountSecurity,
  NotFound,
  NotFoundCover,
  CampoutHome,
  CampoutWhatToExpect,
  CampoutLastYear,
  CampoutQAndA,
  Org2024,
  Setup,
} from 'views';

function page(path, view) {
  return {
    path,
    renderer: (params) => React.createElement(view, params),
  };
}

const routes = [
  page('/', IndexView),
  page('/home', Home),
  page('/customers', Customers),
  page('/hire-us', HireUs),
  page('/faq', Faq),
  page('/career-listing', CareerListing),
  page('/career-listing-minimal', CareerListingMinimal),
  page('/career-opening', CareerOpening),
  page('/contact-page', ContactPage),
  page('/coworking', Coworking),
  page('/e-learning', Elearning),
  page('/enterprise', Enterprise),
  page('/service', Service),
  page('/web-basic', WebBasic),
  page('/desktop-app', DesktopApp),
  page('/expo', Expo),
  page('/agency', Agency),
  page('/startup', Startup),
  page('/design-company', DesignCompany),
  page('/mobile-app', MobileApp),
  page('/job-listing', JobListing),
  page('/rental', Rental),
  page('/cloud-hosting', CloudHosting),
  page('/logistics', Logistics),
  page('/e-commerce', Ecommerce),
  page('/help-center', HelpCenter),
  page('/help-center-article', HelpCenterArticle),
  page('/portfolio-page', PortfolioPage),
  page('/portfolio-masonry', PortfolioMasonry),
  page('/portfolio-grid', PortfolioGrid),
  page('/company-terms', CompanyTerms),
  page('/contact-sidebar-map', ContactPageSidebarMap),
  page('/contact-page-cover', ContactPageCover),
  page('/about', About),
  page('/about-side-cover', AboutSideCover),
  page('/pricing', Pricing),
  page('/blog-search', BlogSearch),
  page('/blog-newsroom', BlogNewsroom),
  page('/blog-article', BlogArticle),
  page('/blog-reach-', BlogReachView),
  page('/password-reset-cover', PasswordResetCover),
  page('/password-reset-simple', PasswordResetSimple),
  page('/signin-simple', SigninSimple),
  page('/signin-cover', SigninCover),
  page('/signup-simple', SignupSimple),
  page('/signup-cover', SignupCover),
  page('/account-billing', AccountBilling),
  page('/account-general', AccountGeneral),
  page('/account-notifications', AccountNotifications),
  page('/account-security', AccountSecurity),
  page('/not-found', NotFound),
  page('/not-found-cover', NotFoundCover),
  page('/campout', CampoutHome),
  page('/campout/what-to-expect', CampoutWhatToExpect),
  page('/campout/last-year', CampoutLastYear),
  page('/campout/q-and-a', CampoutQAndA),
  page('/org/2024', Org2024),
  page('/setup', Setup),
];

export default routes;
