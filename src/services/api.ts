
import axios from "axios";
const api = axios.create({
  baseURL: 'http://192.168.100.84:3333', 
    headers: {  Accept: 'application/json',
    'Content-Type': 'application/json'}
  
})

export default api; 