// 登录接口需要携带参数的类型
export interface LoginUser {
    username: string;
    password: string
}
// 全部接口返回的数据类型
export interface Res {
    code: number;
    message: string;
    ok: boolean
}

// 登录接口返回数据类型
export interface LoginRes extends Res {
    data: string;
}

// 定义用户信息相关的数据类型
export interface UserInfoRes extends Res {
    data: {
        routes: string[];
        buttons: string[];
        rules: string[];
        name: string;
        avatar: string;
    }
}

