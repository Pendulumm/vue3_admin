import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
// import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import globalComponent from '@/components'

// 引入模板的全局样式
import '@/styles/index.scss'

import router from './router'
import './permission';

const app = createApp(App)
app.use(globalComponent)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(pinia)
app.use(router)
// console.log("env >>> ", import.meta.env);

app.mount('#app')
