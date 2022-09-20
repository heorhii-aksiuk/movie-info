import { Routes, Route } from 'react-router-dom'
import AppBar from './AppBar'
import HomeView from '../views/HomeView'
import MoviesView from '../views/MoviesView'
import MovieDetailsView from '../views/MovieDetailsView'
import NotFoundView from '../views/NotFoundView'
import Cast from './Cast'
import Reviews from './Reviews'
import GlobalStyle from '../styles/GlobalStyle'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </div>
  )
}
