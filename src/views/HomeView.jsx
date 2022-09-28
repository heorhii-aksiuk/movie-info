import React, { useEffect, useState } from 'react'
import { API } from '../services/api'
import MovieList from '../components/MovieList'

export default function HomeView() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      const movies = await API.getPopularMovies()
      if (movies) setMovies(movies)
    })()
  }, [])

  const isMovies = movies.length > 0

  return <section>{isMovies && <MovieList movies={movies} />}</section>
}
