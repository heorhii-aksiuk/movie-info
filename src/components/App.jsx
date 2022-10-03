import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import SharedLayout from './SharedLayout'
import Cast from './Cast'
import Reviews from './Reviews'
const HomeView = lazy(() => import('../views/HomeView'))
const MoviesView = lazy(() => import('../views/MoviesView'))
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView'))
const NotFoundView = lazy(() => import('../views/NotFoundView'))

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  )
}
