import axios from '../../node_modules/axios'

     //此处是fetch
const fetch = axios.create({
  baseURL: process.env.BASE_URL
});

// 添加响应拦截器
//此处是fetch
fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

fetch.interceptors.request.use(config =>{
  let token = localStorage.getItem('token')
  if (token){
    config.headers.token = token
    return config
  } else {
    return config
  }
}, err => Promise.reject(err))

const str = '字符串'
export {fetch,str}

