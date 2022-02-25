import axios from "axios";

const baseUrlVar = process.env.REACT_APP_REST_API;

const axiosInstance = axios.create({
    baseURL: baseUrlVar
});

export default axiosInstance;