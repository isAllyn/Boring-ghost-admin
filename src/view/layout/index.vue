<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 18:37:59
 * @LastEditTime: 2022-03-16 22:09:41
 * @Description: 
-->
<script setup lang='ts'>
import header_com from './header/index.vue'
</script>

<template>
  <el-container class="Layout_page">
    <el-aside class="Aside bg-sidebar_hilight dark:bg-sidebar_dark">Aside</el-aside>
    <el-container>
      <el-header class="Header bg-header_hilight dark:bg-header_dark">
        <header_com></header_com>
      </el-header>
      <el-main class="Main bg-main_hilight dark:bg-nain_dark">
        <div class="box">main</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang='scss'>
.box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
}
.Layout_page {
  min-height: 100vh;
  width: 100%;
  .Aside {
    width: 200px;
  }
  .Header {
    height: 60px;
  }
}
</style>