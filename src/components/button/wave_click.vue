<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 13:17:29
 * @LastEditTime: 2022-03-18 14:15:51
 * @Description: 涟漪效果按钮
-->
<script setup lang='ts'>
interface Props {
  width?: string,
  height?: string,
  bg?: string,
  br?: string
}
withDefaults(defineProps<Props>(), {
  width: "90px",
  height: "30px",
  bg: "#b4b4b4"
})
function animation_span(dom: any) {
  let span = document.createElement('span')
  span.style.left = dom.offsetX + 'px'
  span.style.top = dom.offsetY + "px"
  dom.target.appendChild(span)
  setTimeout(() => {
    span.remove()
  }, 500);
}
const emit = defineEmits(["click"])
function btn_click(e: any) {
  emit('click')
  animation_span(e)
}

</script>

<template>
  <div
    class="wave_btn_container"
    @click="btn_click"
    :style="{ width, height, backgroundColor: bg, borderRadius: br }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang='scss'>
.wave_btn_container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ::v-deep(span) {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    background-color: gray;
    border-radius: 50%;
    animation: animas 1s ease 1;
    pointer-events: none;
  }
}
@keyframes animas {
  from {
    width: 0;
    height: 0;
    opacity: 0.8;
  }
  to {
    height: 200px;
    height: 200px;
    opacity: 0;
  }
}
</style>