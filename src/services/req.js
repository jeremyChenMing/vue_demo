import axios from 'axios'
import { POLICY_API } from './api'
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
let instance = axios.create({
    timeout: 5000
})


const Http = {} // 包裹请求方法

for (let key in POLICY_API) {
    let api = POLICY_API[key]; // url,method

    Http[key] = async function(params, isFormData=false, config={}) {
        let body = {}
        if(params && isFormData) {
            body = new FormData();
            for(let n in params) {
                body.append(n, params[n])
            }
        }else{
            // 
            body = params
        }
        //不同请求方法
        let response = {} // 请求返回值
        if(api.method === 'post' || api.method === 'put') {
            try{
                response = await instance[api.method](api.url, body, config)
            }catch(err) {
                response = err
            }
            
        }else{
            // GET 请求
            config.params = body
            try{
                response = await instance[api.method](api.url, config)
            }catch(err) {
                response = err
            }
        }
        console.log(response)
        // return response; // 函数的返回值
    }

}


// 请求拦截器
instance.interceptors.request.use(config => {
    // 这里也可以加入loading状态
    // 加入token
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `JWT ${JSON.parse(token)}`
    }
    return config
}, error => {
    console.log(error)
})

// 返回拦截器
instance.interceptors.response.use(data => {
    return data.data
}, error => {
    checkStatus(error.response && error.response.status)
    return Promise.reject(error)
})

export default Http