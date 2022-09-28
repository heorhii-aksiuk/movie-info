import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: API_KEY,
}

export const REQUEST_URL = {
  POPULAR: '/trending/movie/day',
  SEARCH: '/search/movie?query=',
  INFO: '/movie/',
}
