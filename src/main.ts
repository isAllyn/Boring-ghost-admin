/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 09:02:50
 * @LastEditTime: 2022-03-17 09:09:24
 * @Description:
 */
import { createApp } from "vue"
import App from "./App.vue"

/* use start css */
import "@/style/index.css"

/* screen */
import "@/Plugins/flexible/index"

/* router */
import router from "@/router/index"

/* Element UI */
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount("#app")
