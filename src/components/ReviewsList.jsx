import ReviewCard from '../components/ReviewCard'

export default function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map(
        (review) => review.id && <ReviewCard key={review.id} review={review} />,
      )}
    </ul>
  )
}
