import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../services/api'
import CastList from '../components/CastList'

export default function Cast() {
  const [cast, setCast] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return
    ;(async () => {
      const { cast } = await API.getMovieCast(movieId)
      if (cast) setCast(cast)
    })()
  }, [movieId])

  return <section>{cast && <CastList cast={cast} />}</section>
}
