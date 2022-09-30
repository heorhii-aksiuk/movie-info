import axios from 'axios'
import { REQUEST_URL } from './config'

async function fetchData(request) {
  try {
    const { data } = await axios(request)
    return data
  } catch ({ message }) {
    console.error(message)
  }
}

const { POPULAR, SEARCH, INFO, CAST, REVIEWS } = REQUEST_URL

export const getPopularMovies = () => fetchData(POPULAR)

export const getSearchedMovies = (query) => fetchData(SEARCH + query)

export const getMovieInfo = (id) => fetchData(INFO + id)

export const getMovieCast = (id) => fetchData(INFO + id + CAST)

export const getMovieReviews = (id) => fetchData(INFO + id + REVIEWS)
