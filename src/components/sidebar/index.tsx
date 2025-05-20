import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Box, Hidden, Typography } from '@mui/material'

const navLinks = [
  {
    name: 'Home',
    icon: '/assets/icons/icon-nav-home.svg',
    link: '/'
  },
  {
    name: 'Movies',
    icon: "/assets/icons/icon-nav-movies.svg",
    link: '/movie'
  },
  {
    name: 'Tv Series',
    icon: "/assets/icons/icon-nav-tv-series.svg",
    link: '/tv-series'
  },
  {
    name: 'Bookmark',
    icon: "/assets/icons/icon-nav-bookmark.svg",
    link: '/bookmark'
  },
]

const SideBar = () => {
  const { pathname } = useLocation()
  return (
    <Box sx={{
      backgroundColor: '#161d2f',
      padding: 2,
      borderRadius: 2,
      display: 'flex',
      flexDirection: {
        xs: 'row',
        lg: 'column'
      },
      alignItems: 'center',
      justifyContent: 'space-between',
      height: {
        sm: 200,
        lg: 'calc(100vh - 48px)'
      },
      width: {
        sm: '100%',
        lg: 200
      }
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column'
        },
        gap: 5,
        alignItems: {
          xs: 'center',
          lg: 'start'
        }
      }}>
        <Hidden smDown>
          <Typography
            variant='h5'
            component='h1'
            my={2}
            fontWeight={400}
            fontSize={18}
          >Pikashow App</Typography>
          <Box sx={{
            py: {
              xs: 0,
              ls: '16px'
            },
            display: 'flex',
            flexDirection: {
              xs: 'row',
              lg: "column"
            },
            gap: 4
          }}>
            {navLinks.map(({ link, name, icon }) => (
              <Link
                to={link}
                key={name}
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  color: 'white',
                  textDecoration: 'none'
                }}>
                  <img src={icon} alt={name} style={{
                    width: '18px',
                    filter: `${pathname === link
                      ? 'invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)'
                      : 'invert(84%)'}`
                  }} />
                  <Hidden mdDown>
                    <Typography>{name}</Typography>
                  </Hidden>
                </Box>
              </Link>
            ))}
          </Box>
        </Hidden>
      </Box>
    </Box>
  )
}

export default SideBar