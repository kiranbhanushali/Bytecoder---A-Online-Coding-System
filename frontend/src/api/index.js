import axios from 'axios'
export const BASE_API_URL = process.env.BACKEND_URL
    ? process.env.BACKEND_URL
    : '/api/v1'

axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

export default axios
