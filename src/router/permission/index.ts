/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 15:45:48
 * @LastEditTime: 2022-03-17 15:53:03
 * @Description:
 */
import router from "../index"
import NProgress from "@/utils/progress"

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
