import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页',   // 菜单标题
                    hidden: false,
                    icon: 'HomeFilled'
                }
            }
        ],
        meta: {
            // title: 'layout',
            hidden: false,
            // icon: 'Avatar'
        }
    },
    {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'Screen',
        meta: {
            hidden: false,
            title: '数据大屏',
            icon: 'Platform'
        }
    },
    {
        path: '/acl',
        component: () => import('@/layout/index.vue'),
        name: 'Acl',
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Lock'
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/Acl/User/index.vue'),
                name: 'User',
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/acl/role',
                component: () => import('@/views/Acl/Role/index.vue'),
                name: 'Role',
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/acl/permission',
                component: () => import('@/views/Acl/Permission/index.vue'),
                name: 'Permission',
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Menu'
                }
            },
        ]
    },
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',
        meta: {
            title: '商品管理',
            hidden: false,
            icon: 'Goods'
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/Product/Trademark/index.vue'),
                name: 'Trademark',
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull'
                }
            },
            {
                path: '/product/attr',
                component: () => import('@/views/Product/Attr/index.vue'),
                name: 'Attr',
                meta: {
                    title: '属性管理',
                    icon: 'ChromeFilled'
                }
            },
            {
                path: '/product/sku',
                component: () => import('@/views/Product/Sku/index.vue'),
                name: 'Sku',
                meta: {
                    title: 'SKU管理',
                    icon: 'Coin'
                }
            },
            {
                path: '/product/spu',
                component: () => import('@/views/Product/Spu/index.vue'),
                name: 'Spu',
                meta: {
                    title: 'SPU管理',
                    icon: 'Money'
                }
            },
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
        name: 'Login',
        meta: {
            title: '登录',
            hidden: true,
            icon: 'Promotion'   // 菜单文字左侧的图标
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'WarnTriangleFilled'
        }
    },
]