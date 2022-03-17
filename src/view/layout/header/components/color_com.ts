/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 10:29:31
 * @LastEditTime: 2022-03-17 10:37:38
 * @Description:
 */
/**
 * @event: 为html根元素添加dark类
 * @params {*}
 * @Tip:
 */
export const add_htmlTag_dark = (bool: boolean) => {
  if (bool) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
