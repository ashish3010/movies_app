import React, { SetStateAction, useContext, useEffect, useState } from 'react'
import { Box, Paper, InputBase, InputAdornment, Typography } from '@mui/material'
import Layout from '../../layout'
import MovieTrendingList from '../../components/movie-list/movie-trend-list'
import MovieList from '../../components/movie-list/movie-list'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movie-context'
import { xyz } from '../../utils'

const Home = () => {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState<MovieDataType[]>([])
  const { state } = useContext(MovieContext)
  const { movies } = state || {}

  const trendingList: MovieDataType[] = movies?.filter((movie) => movie.isTrending)
  const recommendedList: MovieDataType[] = movies?.filter((movie) => !movie.isTrending)

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies?.filter((movie) => movie?.title?.toLowerCase()?.includes(search?.toLowerCase()));
    setSearchList(newList)
  }


  useEffect(() => {
    xyz({ a: 'hello', b: 'world' });
  }, []);

  return (
    <Layout>
      <Box>
        <Box>
          <Paper
            component='form'
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 'default',
              p: 1,
              backgroundColor: '#10141f',
              border: 'none'
            }}
          >
            <InputBase
              placeholder='Search for movies and tv series'
              sx={{
                ml: 1,
                flex: 1,
                color: 'white',
                border: 'none'
              }}
              value={search}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position='start'>
                  <img src={'/assets/icons/icon-search.svg'} alt='search icon' width={20} height={20} />
                </InputAdornment>
              }
            />
          </Paper>
        </Box>
        <Box py={2} px={4}>
          {search === '' ? (
            <Box width='100%'>
              <Box width='100%'>
                <Typography variant='h5' component='h1' my={6} fontWeight={400}>Trending</Typography>
                <MovieTrendingList trendingList={trendingList} />
              </Box>
              <Box width='100%'>
                <Typography variant='h5' component='h1' my={6} fontWeight={400}>Recommended For You</Typography>
                <MovieList recommendedList={recommendedList} />
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography variant='h5' component='h1' my={6} fontWeight={400}>
                Found {searchList?.length} results for "{search}"
              </Typography>
              <MovieList recommendedList={searchList} />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  )
}

export default Home