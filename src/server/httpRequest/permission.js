import axios from './httpConfig'

//首页
export function login(data) {
    return axios.post('/admin/login', data)
}

//分类

//购物车

//个人资料