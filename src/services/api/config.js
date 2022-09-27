import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const API_KEY = process.env.REACT_APP_API_KEY
