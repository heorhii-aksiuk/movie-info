import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../services/api'
import ReviewsList from '../components/ReviewsList'

export default function Reviews() {
  const [reviews, setReviews] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return
    ;(async () => {
      const { results: reviews } = await API.getMovieReviews(movieId)
      if (reviews) setReviews(reviews)
    })()
  }, [movieId])

  console.log(reviews)

  return <section>{reviews && <ReviewsList reviews={reviews} />}</section>
}
