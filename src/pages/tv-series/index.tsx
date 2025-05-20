import React, { useState, SetStateAction, useContext } from "react";
import {
  Box, Paper, InputBase, InputAdornment, Typography,
} from "@mui/material";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import Layout from "../../layout";
import MovieList from "../../components/movie-list/movie-list";

const TvSeries = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const tvSeries = movies?.filter((movie) => movie?.category?.toUpperCase() === 'TV SERIES')
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <>
        <Box>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "default",
              p: 1,
              backgroundColor: "#10141f",
              border: "none",
            }}
          >
            <InputBase
              placeholder="Search for movies or TV series"
              sx={{
                ml: 1,
                flex: 1,
                color: "white",
                border: "none",
              }}
              value={search}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    src={'/assets/icons/icon-search.svg'}
                    alt="search icon"
                    width={20}
                    height={20}
                  />
                </InputAdornment>
              }
            />
          </Paper>
        </Box>
        <Box py={2} px={4}>
          {search === "" ? (
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                TV Series
              </Typography>
              <MovieList recommendedList={tvSeries} />
            </Box>
          ) : (
            <Box width="100%">
              <Typography>
                Found {searchList.length} results for "{search}"{""}
              </Typography>
              <MovieList recommendedList={searchList} />
            </Box>
          )}
        </Box>
      </>
    </Layout>
  );
};

export default TvSeries;