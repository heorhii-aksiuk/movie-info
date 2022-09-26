import axios from 'axios'
import { API_KEY } from './requestConfig'

export default async function getPopular() {
  try {
    const response = await axios(`/movie/popular?api_key=${API_KEY}`)
    const data = response.data
    return data
  } catch (error) {
    console.error(error.message)
  }
}
