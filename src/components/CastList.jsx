import CastCard from './CastCard'

export default function CastList({ cast }) {
  return (
    <ul>
      {cast.map(
        (actor) => actor.id && <CastCard key={actor.id} actor={actor} />,
      )}
    </ul>
  )
}
