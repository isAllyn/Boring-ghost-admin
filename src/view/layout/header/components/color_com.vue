<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 23:04:45
 * @LastEditTime: 2022-03-17 11:18:55
 * @Description: 主题按钮
-->
<script setup lang='ts'>
/* components */
import box_hover from '@/components/button/box_hover.vue'
import scale_transition from '@/components/transtion/scale.vue'

/* plugin */
import { ref } from "vue"
import { add_htmlTag_dark } from './color_com'

/* data */
const visible = ref(false)
let switch_btn_value = ref(true)
const switch_value_lcoalKey = "switch_value_lcoalKey"
let bool = JSON.parse(
  localStorage.getItem(switch_value_lcoalKey) || JSON.stringify("")
)
if (typeof bool === "boolean") {
  switch_btn_value.value = bool
  add_htmlTag_dark(bool)
}

/* switch value is change */
function switch_change(newv: any) {
  switch_btn_value.value = newv
  add_htmlTag_dark(newv)//add html dark class
  localStorage.setItem(switch_value_lcoalKey, newv)
}

</script>

<template>
  <!-- 主题按钮 -->
  <span class="color_btn">
    <span class="mask" @click="visible = !visible">
      <box_hover
        width=".375rem"
        :background_color="'#c8c8c9'"
        :borderRadius="'0.125rem'"
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
    <!-- pop-up the click top button to show -->
    <scale_transition>
      <div v-show="visible" class="pop_up pup_dark">
        <el-switch
          v-model="switch_btn_value"
          active-text="暗"
          inactive-text="亮"
          active-color="#134e4a"
          inactive-color="#0f766e"
          @change="switch_change"
        />
      </div>
    </scale_transition>
  </span>
</template>

<style scoped lang='scss'>
.color_btn {
  align-items: flex-start;
  position: relative;
  padding-top: 15px;
  .pop_up {
    position: absolute;
    bottom: -60px;
    right: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(150%);
    padding: 10px;
    cursor: pointer;
  }
}
</style>