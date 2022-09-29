import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = { api_key }

export const REQUEST_URL = {
  POPULAR: '/trending/movie/day',
  SEARCH: '/search/movie?query=',
  INFO: '/movie/',
}
