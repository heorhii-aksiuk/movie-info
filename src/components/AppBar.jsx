import { NavLink, Outlet } from 'react-router-dom'
// import styled from 'styled-components'

export default function AppBar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
