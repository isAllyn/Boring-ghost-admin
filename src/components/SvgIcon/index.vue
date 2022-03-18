<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 10:14:08
 * @LastEditTime: 2022-03-18 11:16:00
 * @Description: 
-->
<script setup lang='ts'>
import { computed, ref } from 'vue'
interface Props {
  name: string,
  color?: string,
  prefix?: string,
}
const props = withDefaults(defineProps<Props>(), {
  color: '#333',
  prefix: 'icon'
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>

<template>
  <svg class="svg_class" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
<style lang="scss" scoped>
.svg_class {
  width: 100%;
  height: 100%;
}
</style>
