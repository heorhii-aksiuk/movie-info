import { useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { API } from '../services/api'
import MovieList from '../components/MovieList'

export default function MoviesView() {
  const [inputValue, setInputValue] = useState('')
  const [movies, setMovies] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = inputValue.trim()
    setSearchParams({ query })
  }

  useEffect(() => {
    if (!query) return
    ;(async () => {
      const { results: movies } = await API.getSearchedMovies(query)
      if (movies) setMovies(movies)
    })()
  }, [query])

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Find</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </section>
  )
}
