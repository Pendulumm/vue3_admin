// 进行axios二次封装    请求和相应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/modules/user";

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,  // 基础路径上会携带 /api
    timeout: 5000
})


request.interceptors.request.use((config) => {
    const userStore = useUserStore();
    config.headers.token = userStore.token

    return config
})

request.interceptors.response.use((response) => {
    // console.log("response >>> ", response);
    return response.data
}, (error) => {
    const status = error.response.status;
    let message = ''
    switch (status) {
        case 401: message = 'token过期'; break;
        case 403: message = '无权访问'; break;
        case 404: message = '服务器出现问题'; break;
        default: message = '网络出现问题'; break;
    }
    // 提示错误消息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})

export default request;