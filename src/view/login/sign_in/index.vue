<!--
 * @Author: 无聊的鬼_
 * @Date: 2022-03-18 13:08:19
 * @LastEditTime: 2022-03-18 16:17:50
 * @Description: 
-->
<script setup lang='ts'>
import { reactive, ref } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue'
import wave_btn from '@/components/button/wave_click.vue'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
/* rules */
function user_name_rule(rule: any, value: any, callback: any) {
  callback(new Error('请联系管理开通注册功能'))
}
function user_pwd_rule(rule: any, value: any, callback: any) {
  callback(new Error('请联系管理开通注册功能'))
}
const rules = reactive({
  user_name: [{ validator: user_name_rule }],
  user_pwd: [{ validator: user_pwd_rule }]
})
let form_value = reactive({
  user_name: '',
  user_pwd: ''
})

function submit(e: any) {
  // console.log(form_value.user_name)
  e.validate((valid: any) => {
    if (valid) {
      alert('登录成功')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="log_in">
    <div class="tilte">
      <span class="img">
        <SvgIcon name="avatar_no2"></SvgIcon>
      </span>
      <span class="text">Sign In</span>
    </div>
    <div class="form_container">
      <el-form ref="ruleFormRef" :rules="rules" :model="form_value">
        <el-form-item class="form_item" prop="user_name">
          <input
            @keyup.enter="submit(ruleFormRef)"
            v-model="form_value.user_name"
            type="text"
            class="user_name ghost_input"
            placeholder="Name"
          />
        </el-form-item>
        <el-form-item class="form_item" prop="user_pwd">
          <input
            @keyup.enter="submit(ruleFormRef)"
            v-model="form_value.user_pwd"
            type="text"
            class="user_name ghost_input"
            placeholder="Password"
          />
        </el-form-item>
        <el-form-item class="form_item">
          <!-- 涟漪按钮 -->
          <wave_btn
            @click="submit(ruleFormRef)"
            class="wave_btn"
            width="100%"
            br="10px"
            bg="#52b5ea"
            height="0.625rem"
          >SIGN</wave_btn>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.log_in {
  .tilte {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px;
    .img {
      width: 70px;
      align-self: flex-end;
      height: 70px;
    }
    .text {
      padding-left: 60px;
      user-select: none;
      font-weight: 700;
      font-size: 50px;
    }
  }
  .form_container {
    .user_name {
      width: 350px;
      margin: 10px auto;
      font-size: 25px;
    }
    .form_item {
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 10px;
      .wave_btn {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        letter-spacing: 10px;
        user-select: none;
      }
      &::v-deep(.el-form-item__error) {
        color: green;
        padding-top: 0px;
        padding-left: 100px;
      }
    }
  }
}
</style>