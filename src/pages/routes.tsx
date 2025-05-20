import { createBrowserRouter } from 'react-router-dom'
import Home from './home'
import Error from './error'
import Movies from './movies'
import TvSeries from './tv-series'
import Bookmark from './bookmark'
import WatchPage from './watch'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/movie',
    element: <Movies />,
    errorElement: <Error />
  },
  {
    path: '/tv-series',
    element: <TvSeries />,
    errorElement: <Error />
  },
  {
    path: '/bookmark',
    element: <Bookmark />,
    errorElement: <Error />
  },
  {
    path: '/watch/:id',
    element: <WatchPage />,
    errorElement: <Error />
  },
])