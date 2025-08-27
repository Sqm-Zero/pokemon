import { createRouter, createWebHashHistory, } from 'vue-router'
import { constantRoute } from './routes'
//创建路由器
let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute,
    //滚动行为
    scrollBehavior(_to, _from, savedPosition) {
        // 如果有保存的滚动位置（用户点击返回），就恢复到保存的位置
        // savedPosition 是浏览器历史记录中保存的滚动位置，只有在浏览器的前进或后退操作时才会触发。
        if (savedPosition) {
            return savedPosition;
        } else {
            // 否则默认滚动到页面顶部
            return { top: 0 };
        }
    }
})

export default router;