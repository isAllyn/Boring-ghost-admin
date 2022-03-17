<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-17 11:11:15
 * @LastEditTime: 2022-03-17 11:12:20
 * @Description: 
-->
<script setup lang='ts'>
import gsap from "gsap"

/* tanstion */
function before_enter(el: Element) {
  gsap.set(el, {
    transform: "scale(0)",
  })
}
function enter(el: Element, done: gsap.Callback) {
  gsap.to(el, {
    transform: "scale(1)",
    duration: .1,
    onComplete: done
  })
}
function leave(el: Element, done: gsap.Callback) {
  gsap.to(el, {
    transform: "scale(0)",
    duration: .3,
    onComplete: done
  })
}
</script>

<template>
  <transition @before-enter="before_enter" @enter="enter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<style scoped lang='scss'>
</style>