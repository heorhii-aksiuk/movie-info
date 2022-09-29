import React, { useEffect, useState } from 'react'
import { API } from '../services/api'
import MovieList from '../components/MovieList'

export default function HomeView() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { results: movies } = await API.getPopularMovies()
      if (movies) setMovies(movies)
    })()
  }, [])

  return <section>{movies && <MovieList movies={movies} />}</section>
}
