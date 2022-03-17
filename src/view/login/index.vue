<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 16:40:44
 * @LastEditTime: 2022-03-17 17:30:25
 * @Description: 
-->
<script setup lang='ts'>
</script>

<template>
  <div class="login_page">
    <img src="~@/assets/iamge/login_no1.svg" alt="Yearn for!" />
    <span class="right_container">
      <span class="login_box"></span>
    </span>
    <div class="copyright">
      <el-link
        href="https://www.iconfont.cn/illustrations/detail?cid=30764"
        type="success"
      >img_Copyright:https://www.iconfont.cn/illustrations/detail?cid=30764</el-link>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.login_page {
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: flex-start;
  background-image: linear-gradient(to left, #9c88ff, #3cadeb);
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
}
</style>