<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()
  userStore.setToken('lbOCrFIBVuG8sgTKrh2LSicMFyrzm853i9UbFXP27Aj1Eh36lhYo9BFbpG4ewEST', 'byiJvBAT8R3X0yWgzwWytEmKZkCXGSQdL5AxRoK36zEFGudzjE4wDyXmhHeSRDOz')
  console.log(userStore.accessToken)
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
