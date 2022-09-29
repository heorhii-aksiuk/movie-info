import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(
        (movie) => movie.id && <MovieCard key={movie.id} movie={movie} />,
      )}
    </ul>
  )
}
