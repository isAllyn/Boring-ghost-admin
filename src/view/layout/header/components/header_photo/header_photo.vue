<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 14:31:41
 * @LastEditTime: 2022-03-17 16:42:12
 * @Description: 
-->
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
let bool = ref(false)
function avart_click(e: any) {
  let path: string = e.target.getAttribute('id')
  if (path) {
    router.push(path)
  }
}
</script>

<template>
  <!-- 头像 -->
  <span
    @click="bool = !bool"
    class="active relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
  >
    <img
      src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
      class="hover:scale-110 transition duration-200 ease-in-out"
      alt="Avatar"
    />
  </span>
  <transition
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__fadeOutLeft"
    :duration="{ enter: 1000, leave: 1000 }"
  >
    <div v-show="bool" class="active_pop pup_dark">
      <ul @click="avart_click">
        <li class="avatar_item hover:bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-1 w-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              clip-rule="evenodd"
            />
          </svg>
          <span>个人中心</span>
        </li>
        <li class="avatar_item hover:bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-1 w-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span id="login">退出登录</span>
        </li>
      </ul>
    </div>
  </transition>
</template>

<style scoped lang='scss'>
.active {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
.active_pop {
  position: absolute;
  top: 70px;
  right: 10px;
  border-radius: 10px;
  user-select: none;
  overflow: hidden;
  padding: 10px 0;
  font-size: 16px;
  .avatar_item {
    width: 100%;
    padding: 0 10px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>