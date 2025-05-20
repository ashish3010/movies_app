import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { router } from './pages/routes'
import { MovieProvider } from './context/movie-context'

const App = () => {
  return (
    <MovieProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </MovieProvider>
  )
}

export default App