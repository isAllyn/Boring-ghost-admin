/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 15:45:48
 * @LastEditTime: 2022-03-18 09:29:52
 * @Description:
 */
import router from "../index"
import NProgress from "@/utils/progress"
import { ElMessage } from "element-plus"
import { user_store } from "@/store/user"

const whiteList = ["/login", "/404"]

router.beforeEach((to, from, next) => {
  NProgress.start()
  const user_store_value = user_store()
  if (user_store_value.token) {
    next()
  } else {
    /* no token */
    if (whiteList.includes(to.path)) {
      next()
    } else {
      /* no token and not whiteList */
      ElMessage({
        showClose: true,
        message: "为了账户安全请您重新登录验证!"
      })
      next("/login")
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
