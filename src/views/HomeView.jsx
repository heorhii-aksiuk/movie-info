import React, { useEffect, useState } from 'react'
import * as API from '../services/api'

export default function HomeView() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async function () {
      const { results: movies } = await API.getPopular()
      if (movies) setMovies(movies)
    })()
  }, [])

  return (
    <section>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
