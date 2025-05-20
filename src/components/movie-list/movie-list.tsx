import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieCard from '../movie-card/movie-card'

type MovieListProps = {
  recommendedList: MovieDataType[]
}

const MovieList = ({ recommendedList }: MovieListProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {recommendedList?.map((movie) => (
        <Grid item key={movie?.id} sx={{
          width: {
            xs: 400,
            md: 400,
            lg: 300
          }
        }}>
          <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box >
  )
}

export default MovieList