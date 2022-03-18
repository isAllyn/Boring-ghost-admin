<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 18:37:59
 * @LastEditTime: 2022-03-18 17:25:28
 * @Description: 
-->
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
const header_com = defineAsyncComponent(() => import('./header/index.vue'))
const main_com = defineAsyncComponent(() => import('./main/index.vue'))

</script>

<template>
  <el-container class="Layout_page">
    <el-aside class="Aside bg-sidebar_hilight dark:text-color_dark dark:bg-sidebar_dark">Aside</el-aside>
    <el-container>
      <el-header class="Header bg-header_hilight dark:text-color_dark dark:bg-header_dark">
        <Suspense>
          <template #default>
            <header_com></header_com>
          </template>
          <template #fallback>
            <div>loading...</div>
          </template>
        </Suspense>
      </el-header>
      <el-main class="Main dark:text-color_dark bg-main_hilight dark:bg-nain_dark">
        <Suspense>
          <template #default>
            <main_com></main_com>
          </template>
          <template #fallback>
            <div>loading...</div>
          </template>
        </Suspense>
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