import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Main from 'layouts/Main';
import FullScreenHeader from 'components/FullScreenHeader';
import NavItems from './NavItems';
import IconInstagram from 'svg/illustrations/IconInstagram';
import IconSoundcloud from 'svg/illustrations/IconSoundcloud';

const DJLineup = () => {
  return (
    <Main colorInvert={true} navItems={NavItems}>
      <Box gap={3}>
        <FullScreenHeader
          image={'https://static.baaahs.org/twunkerbell_backshot.jpeg'}
          title={'Lineup'}
          text={'It would not be a BAAAHS Campout without a sick line up'}
        />
        <Grid container marginTop={2} spacing={2} justifyContent='center'>
          <Grid container item xs={12} xl={8} spacing={2}>
            <DJ
              index={0}
              name="Kelly Naughton"
              blurb="Disco, House, Techno"
              soundcloud="https://soundcloud.com/kellynaughton"
              instagram="https://www.instagram.com/naughtontime"
              image="https://storage.googleapis.com/static.baaahs.org/z_kelly.png"
              key={0}
            />
            <DJ
              index={1}
              name="Booty Juice"
              blurb="Disco, House, Techno, Hip-Hop"
              soundcloud="https://soundcloud.com/bootyjuicesf"
              instagram="https://www.instagram.com/bootyjuicesf"
              image="https://storage.googleapis.com/static.baaahs.org/z_booty.png"
              key={1}
            />
            <DJ
              index={2}
              name="StormyRoxx"
              blurb="Disco, House, Techno"
              soundcloud="https://soundcloud.com/stormyroxx"
              instagram="https://www.instagram.com/stormyroxx"
              image="https://storage.googleapis.com/static.baaahs.org/z_stormy.png"
              key={2}
            />
            <DJ
              index={3}
              name="Tiny Tim"
              blurb="Funky/Jackin’ House, Funk/Soul, Disco, Soulful House, R&B, Deep House, Tech House and Nu Disco."
              soundcloud="https://www.soundcloud.com/djtinytp"
              instagram="https://www.instagram.com/djtinytp"
              image="https://storage.googleapis.com/static.baaahs.org/z_tiny.png"
              key={3}
            />
            <DJ
              index={4}
              name="Trevor Sigler"
              blurb="House, Techno"
              soundcloud="https://on.soundcloud.com/jiaZYGot2TF5eEfo8"
              instagram="https://www.instagram.com/tater_swift"
              image="https://storage.googleapis.com/static.baaahs.org/z_trevor.png"
              key={4}
            />
            <DJ
              index={5}
              name="Del"
              blurb="Baile Funk, Jackin House, Jersey Club, Hard Techno, Dubstep"
              soundcloud="https://on.soundcloud.com/HKpGb"
              instagram="https://www.instagram.com/inebriatedfelon"
              image="https://storage.googleapis.com/static.baaahs.org/z_del.png"
              key={5}
            />
            <DJ
              index={6}
              name="Romii"
              blurb="House, Techno, Breakbeat, Trance, Darkwave, Lofi/Downtempo/Memphis, Rap/Alt-Rock"
              soundcloud="https://soundcloud.com/kingromii"
              instagram="https://www.instagram.com/romii_dreamtension"
              image="https://storage.googleapis.com/static.baaahs.org/z_romii.png"
              key={6}
            />
            <DJ
              index={7}
              name="GUERRILLA PUMP"
              blurb="GHETTO HOUSE, ELECTRO BOOTY BASS AND BALLROOM (VOGUE)"
              soundcloud="https://youtu.be/MkYdduxP8Pc?si=M5p2lL9VyziP5JeO&t=693"
              instagram="https://www.instagram.com/shotbyguerrilla"
              image=""
              key={7}
            />
            <DJ
              index={8}
              name="Issa"
              blurb="House, Disco, Hip-Hop, Techno, World Music"
              soundcloud="https://soundcloud.com/itsissa"
              instagram="http://instagram.com/issaqraj"
              image="https://storage.googleapis.com/static.baaahs.org/z_issa.png"
              key={8}
            />
            <DJ
              index={9}
              name="Twunkerbell"
              blurb="Tech House, EDM, Mashups, Disco, Trance"
              soundcloud="https://soundcloud.com/twunkerbell"
              instagram=""
              image="https://storage.googleapis.com/static.baaahs.org/z_twunkerbell.png"
              key={9}
            />
            <DJ
              index={10}
              name="Mondo Nexus"
              blurb="Sleazy Synthy Disco mixed with Groovin House with a touch of Acid"
              soundcloud="https://soundcloud.com/mondonexus"
              instagram="https://www.instagram.com/mondonexus"
              image="https://storage.googleapis.com/static.baaahs.org/z_mondo.png"
              key={10}
            />
            <DJ
              index={11}
              name="Prince Wolf"
              blurb="Disco, House, Techno"
              soundcloud=""
              instagram="https://www.instagram.com/somaqlo"
              image="https://storage.googleapis.com/static.baaahs.org/z_prince_wolf.png"
              key={11}
            />
            <DJ
              index={12}
              name="Sir Spense"
              blurb="Disco Pop Good vibes :)"
              soundcloud=""
              instagram=""
              image="https://storage.googleapis.com/static.baaahs.org/z_spenser.png"
              key={12}
            />
            <DJ
              index={13}
              name="Bryan Hughes"
              blurb="Progressive, Trance/Morning, Disco, House, Gospel House"
              soundcloud="https://soundcloud.com/djbryanhughes"
              instagram=""
              image="https://storage.googleapis.com/static.baaahs.org/z_bryan_hughes.png"
              key={13}
            />
            <DJ
              index={14}
              name="Brian Maier"
              blurb="Progressive House, Melodic House, Techno"
              soundcloud="https://soundcloud.com/brianmaier"
              instagram=""
              image=""
              key={14}
            />
            <DJ
              index={15}
              name="John Major"
              blurb="House/Minimal Techno/Punk/Polyrhythmic"
              soundcloud="https://soundcloud.com/majorjohn"
              instagram=""
              image=""
              key={15}
            />
            <DJ
              index={16}
              name="Aphex"
              blurb="Trance, Melodic Techno, Progressive House"
              soundcloud="https://soundcloud.com/aphexcx"
              instagram="http://aphex.dj"
              image="https://storage.googleapis.com/static.baaahs.org/z_aphek.png"
              key={16}
            />
            <DJ
              index={17}
              name="Mike Bradley"
              blurb="House, Techno, Tech House. Always fun with a splash of sass~"
              soundcloud="https://m.mixcloud.com/mikebradley9216/"
              instagram=""
              image="https://storage.googleapis.com/static.baaahs.org/z_mike_b.png"
              key={17}
            />
            <DJ
              index={18}
              name="Dennis Dashing"
              blurb="Techno, House"
              soundcloud="https://on.soundcloud.com/u7ATk"
              instagram="https://www.instagram.com/dennisdashing"
              image="https://storage.googleapis.com/static.baaahs.org/z_dennis_dashing.png"
              key={18}
            />
            <DJ
              index={19}
              name="Dunst"
              blurb="Techno, Eelectro, Detroit, Bass, Breaks, Leftfield, IDM, Industrial, Synth-punk"
              soundcloud=""
              instagram=""
              image=""
              key={19}
            />
            <DJ
              index={20}
              name="hunnycut"
              blurb="Queer Centered G-Tech & Bass House"
              soundcloud="https://soundcloud.com/hunnycut"
              instagram="https://www.instagram.com/jckc.ny"
              image=""
              key={20}
            />
            <DJ
              index={21}
              name="LOVR"
              blurb="Dirty bass, music to fuck to, a walk through the hood that makes you feel unsafe."
              soundcloud=""
              instagram=""
              image=""
              key={21}
            />
            <DJ
              index={22}
              name="LAKEVERETT"
              blurb="House, Hip-Hop, Baile Funk, Breakbeat, Disco, Electro, Bass and R&B"
              soundcloud="https://soundcloud.com/lakeverett"
              instagram="https://www.instagram.com/lakeverett"
              image=""
              key={22}
            />
            <DJ
              index={23}
              name="State of Wayne"
              blurb=""
              soundcloud=""
              instagram="https://www.instagram.com/waynebone"
              image=""
              key={23}
            />
          </Grid>
        </Grid>
      </Box>
    </Main>
  );
};

const DJ = ({ index, name, image, blurb, soundcloud, instagram }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
      <Box
        alignItems="center"
        component={Card}
        padding={2}
        borderRadius={2}
        width={1}
        height={1}
        data-aos={'fade-up'}
        data-aos-delay={index * 100}
      >
        <Box flexDirection={'row'} alignItems="center" gap={2}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems="center"
            gap={2}
          >
            {image && (
              <Box
                alignItems="center"
                component={Avatar}
                width={150}
                height={150}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                <img
                  src={image}
                  style={Object.assign({
                    width: '100%',
                  })}
                  alt=""
                />
              </Box>
            )}
            <Typography
              variant="h6"
              fontFamily="Smooth Circulars"
              textAlign="center"
            >
              {name}
            </Typography>
            <Typography color="text.secondary" textAlign="center">
              {blurb}
            </Typography>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems="center"
              gap={2}
            >
              {soundcloud && (
                <Box>
                  <Link
                    underline="none"
                    component="a"
                    href={soundcloud}
                    color={'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <IconSoundcloud color={'text.primary'} />
                  </Link>
                </Box>
              )}
              {instagram && (
                <Box>
                  <Link
                    underline="none"
                    component="a"
                    href={instagram}
                    color={'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <IconInstagram color={'text.primary'} />
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default DJLineup;
