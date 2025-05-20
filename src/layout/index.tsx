import React from 'react';
import { Box } from '@mui/material';
import SideBar from '../components/sidebar';


type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{
      backgroundColor: '#10141F',
      padding: 3,
      overflowY: 'hidden',
      color: 'white',
      gap: 3,
      height: '100vh',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        lg: 'row'
      }
    }}>
      <SideBar />
      <Box sx={{ width: '100%', overflowY: 'scroll' }}>{children}</Box>
    </Box>
  )
}

export default Layout