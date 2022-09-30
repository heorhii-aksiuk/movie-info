import { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { API } from '../services/api'

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return
    ;(async () => {
      const movie = await API.getMovieInfo(movieId)
      if (movie) setMovie(movie)
    })()
  }, [movieId])

  return (
    <>
      {movie && (
        <div>
          <p>{movie.title}</p>
          <p>{movie.tagline}</p>
          <p>{movie.release_date}</p>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      )}
      <Outlet />
    </>
  )
}
