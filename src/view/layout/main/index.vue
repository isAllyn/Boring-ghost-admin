<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 11:28:52
 * @LastEditTime: 2022-03-17 14:01:13
 * @Description: mian 组件
-->
<script setup lang='ts'>
/* components */
import card_transtion from '@/components/card/card_transtion.vue'
</script>

<template>
  <div class="mian">
    <div class="test_box">
      <card_transtion>
        <span class="text">saf123132123adqf11111111111111111111</span>
        <input class="ghost_input input_te" placeholder="Please input" />
      </card_transtion>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.test_box {
  width: 300px;
  height: 300px;
  .input_te {
    height: 50px;
    width: 100px;
  }
}
</style>