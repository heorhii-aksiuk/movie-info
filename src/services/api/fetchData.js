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

const { POPULAR, SEARCH, INFO } = REQUEST_URL

export const getPopularMovies = () => fetchData(POPULAR)

export const getSearchedMovies = (query) => fetchData(SEARCH + query)

export const getMovieInfo = (id) => fetchData(INFO + id)
