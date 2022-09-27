import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function MoviesView() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchValue(inputValue)
  }

  useEffect(() => {}, [])

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Find</button>
      </form>
      <p>{searchValue}</p>
      <Outlet />
    </section>
  )
}
