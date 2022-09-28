import axios from 'axios'
import { REQUEST_URL } from './config'

async function fetchData(request) {
  try {
    const response = await axios(request)
    const { results } = response.data
    return results
  } catch (error) {
    console.error(error.message)
  }
}

export const getPopularMovies = () => fetchData(REQUEST_URL.POPULAR)

export const getSearchedMovies = (query) =>
  fetchData(REQUEST_URL.SEARCH + query)

export const getMovieInfo = (id) => fetchData(REQUEST_URL.INFO + id)
