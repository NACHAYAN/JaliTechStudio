import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './store'
import { router } from './router'
import '@assets/main.css'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 设置Web标题
const APP_TITLE = __APP_TITLE__;
document.title = APP_TITLE;

// 创建Vue应用
const app = createApp(App)

// 设置应用状态
setupStore(app)

// 注册路由
app.use(router)

// 注册ElementPlus
app.use(ElementPlus)

// 启动应用
app.mount('#app')
