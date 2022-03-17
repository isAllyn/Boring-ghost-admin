<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 22:05:19
 * @LastEditTime: 2022-03-17 14:32:39
 * @Description: 
-->
<script setup lang='ts'>
import color_com from './components/color_com/color_com.vue'
import header_photo from './components/header_photo/header_photo.vue'
</script> 

<template>
  <div class="header">
    <!-- left content -->
    <div class="left_container">左侧</div>
    <!-- right content -->
    <div class="right_container">
      <color_com></color_com>
      <header_photo></header_photo>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .right_container {
    display: flex;
    align-items: center;

    /* 头像 */
  }
}
</style>