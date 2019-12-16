import Axios from "axios";
import baseURL from "./baseUrl";
let http ={};

//初始化实例
let instance = Axios.create({
  baseURL,
  timeout:30000,
})
// let token = "" ;

//添加请求拦截器
instance.interceptors.request.use(config => {
  if(token){
    config.headers = {
      // 'U-BEE-CASHIER-TOKEN': token,
      'Content-Type': 'application/json'
    }
  }else{
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return config;
}, error => {
  return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.resolve(error)
})

/**
 * get 请求方法
 * @params url 
 * @params data
 */
http.get = function(url,data={}){
  return new Promise((resolve,reject) => {
    instance.get(url,{ params: data})
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
  })
}

/**
 * post 请求方法
 * @params url 
 * @params data
 */
http.post = function(url, data){
  return new Promise((resolve,reject) => {
    instance.post(url, data)
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
  })
}

export default http;
