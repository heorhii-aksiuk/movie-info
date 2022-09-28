import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = process.env.REACT_APP_API_KEY

export const REQUEST_URL = {
  POPULAR: `/trending/movie/day?api_key=${API_KEY}`,
  SEARCH: `/search/movie?api_key=${API_KEY}&query=`,
}
