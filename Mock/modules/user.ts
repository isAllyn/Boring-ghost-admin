/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 16:26:06
 * @LastEditTime: 2022-03-18 17:03:44
 * @Description:
 */
import Mock from "mockjs"
const baseurl = import.meta.env.VITE_BASE_URL
Mock.mock(baseurl + "/login", {
  token: "wozhendeshiyigetoken"
})
