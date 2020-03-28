import axios from 'axios'
// import qs from 'qs'
import { Notification } from 'element-ui'

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

const checkStatus = (status) => {
    if (status && codeMessage[status]) {
        Notification.error({
            title: '错误请求',
            message: codeMessage[status]
        })
    }
}


let instances = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json' // post 请求不需要进行序列化
        // 'Content-Type': 'application/x-www-form-urlencoded' // 需要用qs进行数据的序列化
    }
})


instances.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `JWT ${JSON.parse(token)}`
    }
    return config
}, error => {
    console.log(error)
})

instances.interceptors.response.use(data => {
    return data.data
}, error => {
    checkStatus(error.response && error.response.status)
    return Promise.reject(error)
})



const request = function (url, options={}) {
    if (options.method === 'POST' || options.method === 'PUT' || options.method === 'DELETE') {
        console.log('data')
    } else {
        // 进入get请求 url结尾添加时间戳
        if (url.indexOf('?') !== -1) {
            url = url + '&tt=' + new Date().getTime()
        } else {
            url = url + '?tt=' + new Date().getTime()
        }
    }
    console.log(typeof options.data, '-----')
    return instances({
        url,
        method: options.method,
        data: options.data,
        // data: qs.stringify(options.data) 
    })
}


export default request