<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 23:04:45
 * @LastEditTime: 2022-03-16 23:06:35
 * @Description: 主题按钮
-->
<script setup lang='ts'>
import box_hover from '@/components/button/box_hover.vue'
/*  */
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <!-- 主题按钮 -->
  <el-popover v-model:visible="visible" placement="bottom" title="Title" :width="100" :offset="30">
    <template #reference>
      <span @click="visible = !visible" class="color_btn">
        <box_hover
          width=".375rem"
          :background_color="'#c8c8c9'"
          :borderRadius="'10px'"
          height=".375rem"
        >
          <svg
            t="1647440464583"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3647"
          >
            <path
              d="M113.3 393.7v49.8c0 9.2 7.4 16.6 16.6 16.6V510c0 73.4 78.1 132.9 174.4 132.9S478.8 583.4 478.8 510v-49.8h66.5V510c0 73.4 78.1 132.9 174.4 132.9S894.1 583.4 894.1 510v-49.8c9.2 0 16.6-7.4 16.6-16.6v-49.8c0-9.2-7.4-16.6-16.6-16.6H129.9c-9.2-0.1-16.6 7.3-16.6 16.5zM185 568.1l61.7-108h19.1l-61.7 108H185z m73.7 0h-19.1l61.7-108h19.1l-61.7 108z m341.6 0l61.7-108h19.1l-61.7 108h-19.1z m73.8 0H655l61.7-108h19.1l-61.7 108z"
              fill="#49A0E8"
              p-id="3648"
            />
          </svg>
        </box_hover>
      </span>
    </template>
    <span>content</span>
  </el-popover>
</template>

<style scoped lang='scss'>
.color_btn {
  align-items: flex-start;
  height: 15px;
}
</style>