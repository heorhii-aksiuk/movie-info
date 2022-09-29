import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { API } from '../services/api'
import MovieList from '../components/MovieList'

export default function MoviesView() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState(null)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputValue.trim()
    setSearchValue(value)
  }

  useEffect(() => {
    if (!searchValue) return
    ;(async () => {
      const { results: movies } = await API.getSearchedMovies(searchValue)
      if (movies) setMovies(movies)
    })()
  }, [searchValue])

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Find</button>
      </form>
      {movies && <MovieList movies={movies} />}
      <Outlet />
    </section>
  )
}
