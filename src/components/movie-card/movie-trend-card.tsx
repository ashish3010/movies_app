
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { Box, Card, CardContent, Stack, Typography, Grid } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { MovieContext } from "../../context/movie-context";
import { MovieDataType } from "../../assets/data";
import { movieDetals } from "../../recoil-store/movie-details";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const moviesIcon = '/assets/icons/icon-category-movie.svg'
const tvSeriesIcon = '/assets/icons/icon-category-tv.svg'

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const setMovieInfo = useSetRecoilState(movieDetals);
  const navigate = useNavigate();
  const handleToggleBookmark = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    event?.stopPropagation()
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };

  const handleClick = () => {
    setMovieInfo(movie)
    navigate(`/watch/${movie?.title}`)
  }

  return (
    <Card
      onClick={handleClick}
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent", cursor: 'pointer' }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{ width: 300, height: 200, borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
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
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
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
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
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
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
            }}
            // onClick={(event) => console.log(event)}
            onClick={(event) => handleToggleBookmark(event, movie.id)}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon sx={{ color: 'white' }} />
            ) : (
              <BookmarkBorderIcon sx={{ color: 'white' }} />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
