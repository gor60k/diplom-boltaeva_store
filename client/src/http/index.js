import axios from 'axios';

const $host = axios.create({
    baseURL: "http://localhost:5000/api"
})

const $authHost = axios.create({
    baseURL: "http://localhost:5000/api"
})

const authIntercepter = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authIntercepter)

export {
    $host,
    $authHost
}
