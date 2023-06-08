import axios from "axios";
const service = axios.create({
    baseURL:"https://www.fastmock.site/mock/e24fe51fa8765e0939cdd044f68e3eb5/shop",
})
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error)
})
export default service