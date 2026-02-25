<template>
    <p>这里是控制台页面</p>
    <el-button class="button-style" type="primary" @click="loginOut">按钮</el-button>
</template>

<script setup lang="ts">
  import { ElMessageBox } from 'element-plus'
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()
  const loginOut = (): void => {
    setTimeout(() => {
      ElMessageBox.confirm(('您是否要退出登录?'), ('提示'), {
        confirmButtonText: ('确认'),
        cancelButtonText: ('取消'),
        customClass: 'login-out-dialog'
      }).then(() => {
        userStore.logOut()
      })
    }, 200)
  }
</script>

<style lang="scss" scoped>
.button-style {
    margin-top: 20px;
}
</style>