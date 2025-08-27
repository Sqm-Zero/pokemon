import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入路由
import router from './router'
//引入模版的全局的样式
import '@/styles/index.scss'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目的全局组件
// import globalComponent from '@/components'
import globalComponent from '@/components/index'
//引入仓库pinia
import { createPinia } from 'pinia';

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})

//安装自定义插件
app.use(globalComponent)
//注册模版路由
app.use(router)
// 创建 Pinia 实例
const pinia = createPinia();
// 使用 Pinia
app.use(pinia);
//挂载
app.mount('#app')