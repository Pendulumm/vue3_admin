// 路由鉴权
import router from "./router";
//@ts-ignore
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import { useUserStore } from "./stores/modules/user";
import pinia from "./stores";
import setting from "./setting";

nprogress.configure({ showSpinner: false });
const userStore = useUserStore(pinia);

router.beforeEach(async (to, from, next) => {
    document.title = `${setting.title} - ${to.meta.title}`
    nprogress.start();
    // 判断登录
    const token = userStore.token;
    const username = userStore.username;
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            // 有用户信息
            if (username) {
                next();
            } else {
                try {
                    await userStore.getUserInfo();
                    next();
                } catch (error) {
                    // 退出或token失效
                    await userStore.logout();
                    next({ path: '/login', query: { redirect: to.path } });
                }
            }
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})

router.afterEach(() => {
    nprogress.done();
})