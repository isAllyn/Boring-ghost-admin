/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 09:02:50
 * @LastEditTime: 2022-03-18 17:02:32
 * @Description:
 */
import { createApp } from "vue"
import App from "./App.vue"

/* use start css */
import "@/assets/font/iconfont.css"
import "animate.css"
import "@/style/index.css"

/* mock */
import "../Mock/index"

/* screen */
import "@/Plugins/flexible/index"

/* router */
import router from "@/router/index"
import "@/router/permission/index"
/* Element UI */
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

/* icons svg */
import "virtual:svg-icons-register"

/* pinia */
import { createPinia } from "pinia"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount("#app")
