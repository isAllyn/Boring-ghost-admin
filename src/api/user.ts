/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 17:07:53
 * @LastEditTime: 2022-03-18 17:07:54
 * @Description:
 */
import request from "@/utils/request"

export const login = () => {
  return request({
    url: "/login",
    method: "GET"
  })
}
