//对外暴露配置路由(常量路由)
export const constantRoute = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/pokemon',
        component: () => import('@/views/Pokemon/index.vue'),
        name: 'pokemon',
        meta: {
            title: '宝可梦列表',
            keepAlive: true,
            scrollPosition: true
        }
    },
    {
        path: '/pokemon/info',
        component: () => import('@/views/Information/index.vue'),
        name: 'info',
        meta: {
            title: '宝可梦信息'
        }
    },
    {
        path: '/move',
        component: () => import('@/views/Move/index.vue'),
        name: 'move',
        meta: {
            title: '技能列表'
        }
    },
    {
        path: '/areas',
        component: () => import('@/views/Areas/index.vue'),
        name: 'areas',
        meta: {
            title: '地区列表'
        }
    },
    {
        path: '/areas/area_info',
        component: () => import('@/views/Areas/Areas_info/index.vue'),
        name: 'areaInfo',
        meta: {
            title: '地区详细信息'
        }
    },
    {
        path: '/trainer',
        component: () => import('@/views/Trainer/index.vue'),
        name: 'region',
        meta: {
            title: '训练家列表'
        }
    },
    {
        path: '/group-detail/:groupName',
        component: () => import('@/views/Trainer/GroupDetail/index.vue'),
        name: 'GroupDetail'
    },
    {
        path: '/move/move_info',
        component: () => import('@/views/Move/Move_info/index.vue'),
        name: 'moveInfo',
        meta: {
            title: '技能信息'
        }
    },
    {
        path: '/ability/ability_info',
        component: () => import('@/views/Ability/index.vue'),
        name: 'abilityInfo',
        meta: {
            title: '特性列表'
        }
    },
    {
        path: '/prop/prop_info',
        component: () => import('@/views/Prop/Prop_info/index.vue'),
        name: 'propInfo',
        meta: {
            title: '道具信息'
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any'
    }
]