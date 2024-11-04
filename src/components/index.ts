import SvgIcon from "./SvgIcon.vue"
import Pagination from "./Pagination.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const gComponents: any = {
    SvgIcon,
    Pagination
}
export default {
    install(app: any) {
        Object.keys(gComponents).forEach((key: string) => {
            app.component(key, gComponents[key])
        });
        // 将element-plus提供的图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}