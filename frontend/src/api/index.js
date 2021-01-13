
import axios from 'axios'
export const BASE_API_URL = "http://localhost:5000"

axios.defaults.headers.common["authorization"] = localStorage.getItem( "token" ) ;



export default axios;
