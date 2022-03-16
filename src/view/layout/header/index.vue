<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 22:05:19
 * @LastEditTime: 2022-03-16 23:06:36
 * @Description: 
-->
<script setup lang='ts'>
import color_com from './components/color_com.vue'
</script>

<template>
  <div class="header">
    <!-- left content -->
    <div class="left_container">左侧</div>
    <!-- right content -->
    <div class="right_container">
      <color_com></color_com>
      <!-- 头像 -->
      <span class="active relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
          class="hover:scale-110 transition duration-300 ease-in-out"
          alt="Avatar"
        />
      </span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left_container {
  }
  .right_container {
    display: flex;
    align-items: center;

    /* 头像 */
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
  }
}
</style>