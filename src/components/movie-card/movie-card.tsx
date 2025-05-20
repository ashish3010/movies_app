import React, { useContext } from 'react'
import { Card, CardContent, Grid, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movie-context';
import { movieDetals } from '../../recoil-store/movie-details';

interface MovieCardProps {
  movie: MovieDataType
}

const moviesIcon = '/assets/icons/icon-category-movie.svg'
const tvSeriesIcon = '/assets/icons/icon-category-tv.svg'

const MovieCard = ({ movie }: MovieCardProps) => {
  const setMovieInfo = useSetRecoilState(movieDetals);
  const navigate = useNavigate();
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };

  const handleClick = () => {
    setMovieInfo(movie)
    navigate(`/watch/${movie?.title}`)
  }

  return (
    <Card
      onClick={handleClick}
      variant='outlined' sx={{ bgcolor: 'transparent', color: '#e0e0e0', my: 3, border: 'none', cursor: 'pointer' }}>
      <CardContent sx={{ p: 0, position: 'relative' }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt={movie?.title}
              style={{ width: '100%', height: 180, borderRadius: 8 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="#E0E0E0" padding={0} aria-label="movie title">
              {movie.title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MovieCard