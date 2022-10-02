import React from 'react'

export default function ReviewsCard({ review }) {
  return (
    <div>
      <p>{review.author}</p>
      <p>{review.content}</p>
    </div>
  )
}
