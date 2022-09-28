import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { API } from '../services/api'
import MovieList from '../components/MovieList'

export default function MoviesView() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //TODO: trim
    setSearchValue(inputValue)
  }

  useEffect(() => {
    if (!searchValue) return
    ;(async () => {
      const movies = await API.getSearchedMovies(searchValue)
      if (movies) setMovies(movies)
    })()
  }, [searchValue])

  const isMovies = movies.length > 0

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Find</button>
      </form>
      {isMovies && <MovieList movies={movies} />}
      <Outlet />
    </section>
  )
}
