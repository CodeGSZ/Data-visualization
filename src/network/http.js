import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        //请求的基本路径
        baseURL: 'http://127.0.0.1:5000/'
    })
    instance.interceptors.request.use((config) => {
        return config
    }, err => {
        return 'request erro !'
    })
    return instance(config)
}