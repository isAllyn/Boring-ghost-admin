/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 17:04:36
 * @LastEditTime: 2022-03-18 17:07:31
 * @Description:
 */
import axios from "axios"
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
