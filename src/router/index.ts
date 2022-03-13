/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 18:35:46
 * @LastEditTime: 2022-03-13 19:17:19
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/view/layout/index.vue"
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      keepAlive: true
    },
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes
})

export default router
