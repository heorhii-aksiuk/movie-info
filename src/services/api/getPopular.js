import axios from 'axios'
import { API_KEY } from './config'

const REQUEST_URL = `/movie/popular?api_key=${API_KEY}`

export default async function getPopular() {
  try {
    const response = await axios(REQUEST_URL)
    const { results } = response.data
    return results
  } catch (error) {
    console.error(error.message)
  }
}

// async function searchMovies() {
//   return await getPopular()
// }
