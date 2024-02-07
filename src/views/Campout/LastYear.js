import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import CampoutMain from 'layouts/CampoutMain.js';
import FullScreenHeader from 'components/FullScreenHeader';
import { useTheme } from '@emotion/react';

const imgSize = 128;
const contentItems = [
  {
    name: 'Item 1',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230527_174212.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 2',
    src: 'https://storage.googleapis.com/static.baaahs.org/IMG_0448.png',
    cols: 3,
    rows: 3,
  },
  {
    name: 'Item 3',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230527_174339.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 4',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_004535.jpg',
    cols: 2,
    rows: 3,
  },
  {
    name: 'Item 7',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230529_002733.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 8',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_174740.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 5',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_004629.jpg',
    cols: 2,
    rows: 3,
  },
  {
    name: 'Item 9',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_172118.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 10',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_232605.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 11',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_065034.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 12',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_172109.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 13',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_052014.jpg',
    cols: 3,
    rows: 2,
  },
  {
    name: 'Item 14',
    src: 'https://storage.googleapis.com/static.baaahs.org/20230528_051741.jpg',
    cols: 3,
    rows: 2,
  },
];

const LastYear = () => {
  const theme = useTheme();
  return (
    <CampoutMain colorInvert={true} >
      <Box gap={3}>
        <FullScreenHeader image={'https://storage.googleapis.com/static.baaahs.org/drag_bingpo_candid0.jpeg'} 
          title={'Previous Years'}
          text={'Our Campout has been going on for years. Here are some of the highlights from previous years.'}
        />
        <Grid container spacing={2} justifyContent={'center'}>
          <ImageList sx={{ width: 1200 }} cols={9} variant="quilted" gap={2}>
            {contentItems.map((item) => (
              <ImageListItem key={item.name} cols={item.cols || 1} rows={item.rows || 1}>
                <Box 
                  component="img" 
                  loading="lazy"
                  src={item.src}
                  alt={item.name}
                  width={item.cols * imgSize}
                  height={item.rows * imgSize}
                  sx={{
                    objectFit: 'cover',
                    filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default LastYear;
