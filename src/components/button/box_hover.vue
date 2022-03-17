<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 19:18:28
 * @LastEditTime: 2022-03-17 10:56:54
 * @Description: hover show color
-->
<script setup lang='ts'>
import { onMounted } from 'vue'
interface Props {
  width: string,
  height: string,
  background_color?: string,
  color?: string,
  borderRadius?: string
}
let props = withDefaults(defineProps<Props>(), {
  width: "50px",
  height: "50px",
  background_color: "white",
  color: "#3b5988",
  borderRadius: "15px"
})
onMounted(() => {
  let dom = document.getElementsByClassName('btn_facebook')[0].children
  dom[0].classList.add('fa')
  dom[0].classList.add('fa-facebook')
  document.styleSheets[0].insertRule(`.btn_facebook::before { background-color: ${props.color} }`, 0);
})
</script>

<template>
  <div>
    <div class="container">
      <a
        href="javascript:void(0)"
        :style="{ width, height, backgroundColor: background_color, color: color, borderRadius }"
        class="btn btn_facebook"
      >
        <slot></slot>
      </a>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.container {
  display: flex;
  &:active .btn::before {
    background-color: #010101;
  }
}
.container .btn {
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 0 10px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
}

.container ::v-deep(.fa) {
  font-size: 38px;
  transform: scale(0.9);
  line-height: 90px;
  transition: all 0.2s cubic-bezier(0.31, -0.1, 0.43, 1.59);
}
.container .btn::before {
  content: "";
  position: absolute;
  top: 90%;
  left: -110%;
  width: 120%;
  height: 120%;
  transform: rotate(45deg);
  transition: all 0.2s cubic-bezier(0.31, -0.1, 0.43, 1.59);
}
.container .btn:hover::before {
  top: -10%;
  left: -10%;
}
.container .btn:hover ::v-deep(.fa) {
  color: #fff;
  transform: scale(1);
}
</style>