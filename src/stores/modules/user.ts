import { getUserInfo, login, logout } from "@/api/user";
import type { LoginRes, LoginUser, UserInfoRes } from "@/api/user/type";
import { defineStore } from "pinia";
import type { UserState } from "./types/type";
import { CLEAR_TOKEN, GET_TOKEN, SET_TOKEN } from "@/utils/token";
import { routes } from "@/router/routes";

export const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            menuRoutes: routes, // 生成菜单需要的路由
            username: '',
            avatar: ''
        }
    },
    actions: {
        async login(data: LoginUser) {
            const res: LoginRes = await login(data)
            // console.log(res);
            if (res.code === 200) {
                this.token = (res.data as string)
                // 本地持久化存储
                SET_TOKEN((res.data as string))
                return 'OK'
            } else {
                return Promise.reject(new Error(res.message))
            }
        },
        // 获取用户信息
        async getUserInfo() {
            // 获取用户信息
            const res: UserInfoRes = await getUserInfo();
            if (res.code === 200) {
                this.username = res.data.name;
                this.avatar = res.data.avatar;
                return 'OK'; 
            } else {
                return Promise.reject(new Error(res.message))
            }
        },
        async logout() {
            const res = await logout();
            if (res.code === 200) {
                this.token = '';
                this.username = '';
                this.avatar = '';
                CLEAR_TOKEN();
                return 'OK';
            } else {
                return Promise.reject(new Error(res.message))
            }

        }
    },
    getters: {

    }
})