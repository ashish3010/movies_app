/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { Box, Button, Typography, Grid } from "@mui/material";
import Layout from '../../layout'
import { movieDetals } from '../../recoil-store/movie-details';
import { iFrameStyle } from './style';

const apiKey = 'AIzaSyDS38qbvszN7ST6dsyGYHIJPzyxxJRqyDU';
const moviesIcon = '/assets/icons/icon-category-movie.svg'
const tvSeriesIcon = '/assets/icons/icon-category-tv.svg'

const WatchPage = () => {
  const movieInfo = useRecoilValue(movieDetals);
  const [data, setData] = useState<any | null>(null)
  const { title, year, rating, category } = movieInfo;
  const { videoId } = data?.items?.[0]?.id || {}

  const searchQuery = `${title} trailer`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}&maxResults=1&type=video`;

  const getData = async () => {
    const resp = await fetch(url);
    const apiResp = await resp.json();
    setData(apiResp)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(movieInfo)
  console.log(data, 'data')
  console.log(videoId, 'data')

  if (!videoId) {
    return <div>Loading....</div>
  }

  return (
    <Layout>
      <Fragment>
        <Box sx={{
          height: 24
        }} />
        <div css={iFrameStyle}>
          <iframe
            className='video'
            width="1200" height="500"
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${videoId}?autoplay=1`}>
          </iframe>
        </div>
        <Box>
          <Typography variant="h4" component="h1" my={4} fontWeight={400}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                fontSize={20}
                color="#E0E0E0"
                aria-label="year of movie"
              >
                {year}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  background: "#E0E0E0",
                  borderRadius: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={category === "Movies" ? moviesIcon : tvSeriesIcon}
                alt=""
                width={16}
                height={16}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={20}
                color="#E0E0E0"
                aria-label="movie category"
              >
                {category}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  background: "#E0E0E0",
                  borderRadius: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={20}
                color="#E0E0E0"
                aria-label="movie rating"
              >
                {rating}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button></Button>
        </Box>
      </Fragment>
    </Layout>
  )
}

export default WatchPage