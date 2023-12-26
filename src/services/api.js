import axios from "axios";

const api = axios.create({
    baseURL: process.env.backend_URL
})

export default api