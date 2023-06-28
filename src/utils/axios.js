import axios from 'axios'
// import { message } from 'antd'

axios.defaults.timeout = 30000
// axios.interceptors.request.use(config => {
//     const { token, token_type } = getToken() || {}
//     if (token_type) {
//         config.headers.Authorization = `${token_type} ${token}`;
//     }
//     if (config.method === 'post') {
//         if (config.headers['Content-Type'] == 'application/json') {
//             config.data = JSON.stringify(config.data);
//         }
//     }
//     return config
// }, error => {
//     return Promise.reject(error)
// })

axios.interceptors.response.use(response => {
    //如果token过期，跳转到登录页面
    if (response.data.code !== 200) {
        alert(response.config.url + '错误')
        // window.location.href = '/#/login';
    }
    return response.data
}, error => {
    throw (new Error(error))
    // if (error.response) {
    //     if (error.response.status == '401') {
    //         window.location.href = '/#/login';
    //     } else {
    //         message.error(error.response.data.errMsg)
    //     }
    // }
})

export default axios
