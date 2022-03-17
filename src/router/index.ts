/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 18:35:46
 * @LastEditTime: 2022-03-17 16:42:06
 * @Description:
 */
// component: () => import("@/view/404.vue")

import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router
} from "vue-router"
import Layout from "@/view/layout/index.vue"
import com_404 from "@/view/404/404.vue"
import login from "@/view/login/index.vue"
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      keepAlive: true
    },
    component: Layout
  },
  {
    path: "/404",
    name: "404",
    meta: {
      keepAlive: false
    },
    component: com_404
  },
  {
    path: "/login",
    name: "login",
    meta: {
      keepAlive: false
    },
    component: login
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes
})

export default router
