import { NavLink } from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <li>
      <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
    </li>
  )
}
