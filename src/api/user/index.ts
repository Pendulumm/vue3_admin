// 统一管理项目用户相关的接口
import request from "@/utils/request";
import type { LoginRes, LoginUser, UserInfoRes } from "./type";

enum API {
    // LOGIN_URL = '/user/login',
    // USERINFO_URL = '/user/info'
    LOGIN_URL = '/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout'
}
enum METHODS {
    GET = 'GET',
    POST = 'POST',
    FETCH = 'FETCH'
}

// 登录接口
export const login = (data: LoginUser) => request<any, LoginRes>({
    url: API.LOGIN_URL,
    method: METHODS.POST,
    data
})

// 获取用户信息
export const getUserInfo = () => request<any, UserInfoRes>({
    url: API.USERINFO_URL,
    method: METHODS.GET
})

export const logout = () => request<any, any>({
    url: API.LOGOUT_URL,
    method: METHODS.POST
})