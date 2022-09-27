import React, { useEffect, useState } from 'react'
import * as API from '../services/api'

export default function HomeView() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      const movies = await API.getPopular()
      if (movies) setMovies(movies)
    })()
  }, [])

  return (
    <section>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
