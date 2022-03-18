<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 16:40:44
 * @LastEditTime: 2022-03-18 16:22:18
 * @Description: 
-->
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import log_in_component from './log_in/index.vue'
import sign_in_component from './sign_in/index.vue'
let LogOrSign = ref(true)

let sign_in_color = ref('#333333')
function mouseenter() {
  sign_in_color.value = '#55b6e9'
}
function mouseout() {
  sign_in_color.value = '#333333'
}
function mousedown() {
  sign_in_color.value = '#4b4848'
}
function mouseup() {
  sign_in_color.value = '#55b6e9'
}
</script>

<template>
  <div class="login_page">
    <!-- 背景 -->
    <img src="~@/assets/iamge/login_no1.svg" alt="Yearn for!" />
    <!-- 登录框 -->
    <div class="login_box">
      <template v-if="LogOrSign">
        <log_in_component></log_in_component>
      </template>
      <span v-else class="sign_in">
        <sign_in_component></sign_in_component>
      </span>
      <div @click="LogOrSign = !LogOrSign" class="go_sign_in">
        <SvgIcon :name="LogOrSign ? 'sign-in' : 'log_in'" :color="sign_in_color"></SvgIcon>
        <div
          @mouseenter="mouseenter"
          @mouseup="mouseup"
          @mousedown="mousedown"
          @mouseout="mouseout"
          class="mask"
        ></div>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="copyright">
      <el-link
        href="https://www.iconfont.cn/illustrations/detail?cid=30764"
        type="success"
      >img_Copyright:https://www.iconfont.cn/illustrations/detail?cid=30764</el-link>
    </div>
    <!-- 登录信息提示 -->
    <div class="login_info">
      <span>账号:admin</span>
      <span>密码:1234</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.login_page {
  height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  position: relative;
  display: flex;
  justify-content: flex-start;
  // background-image: linear-gradient(to left, #9c88ff, #3cadeb);
  background-image: linear-gradient(to left, #5fb9e9, #3cadeb);
  .login_box {
    margin-top: 150px;
    margin-right: 20px;
    width: 500px;
    height: 380px;
    position: relative;
    border-radius: 20px;
    background-color: #e3e3e3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    .go_sign_in {
      position: absolute;
      top: 15px;
      right: 30px;
      width: 30px;
      height: 30px;
      .mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
  img {
    height: 100%;
    width: 70%;
  }
  .copyright {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .login_info {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 12px;
  }
}
</style>