/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 09:00:41
 * @LastEditTime: 2022-03-18 17:27:09
 * @Description:
 */
import { defineStore } from "pinia"
import { login } from "@/api/user"

export const user_store = defineStore("user", {
  state: () => {
    return {
      token: ""
    }
  },
  actions: {
    /**
     * @event: 用户登录
     * @params {*}
     * @Tip:
     */
    async login_store() {
      let data = await login()
      console.log(data)
    }
  }
})
