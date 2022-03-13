<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 18:37:59
 * @LastEditTime: 2022-03-13 19:53:29
 * @Description: 
-->
<script setup lang='ts'>
</script>

<template>
  <el-container class="Layout_page">
    <el-aside class="Aside bg-blue-400">Aside</el-aside>
    <el-container>
      <el-header class="Header bg-blue-600">Header</el-header>
      <el-main class="Main">Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang='scss'>
.Layout_page {
  min-height: 100vh;
  width: 100%;
  .Aside {
    width: 200px;
  }
  .Header {
  }
}
</style>