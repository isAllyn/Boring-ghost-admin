<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 11:32:52
 * @LastEditTime: 2022-03-17 12:04:04
 * @Description: 带动画的卡片
-->
<script setup lang='ts'>
import scale_transtion from '@/components/transtion/scale.vue'
</script>

<template>
  <transition :appear="true" appear-active-class="animate__animated animate__bounceInDown">
    <el-card class="box-card dark:bg-gray-200">
      <slot></slot>
    </el-card>
  </transition>
</template>

<style scoped lang='scss'>
.box-card {
  width: 100%;
  height: 100%;
}
</style>