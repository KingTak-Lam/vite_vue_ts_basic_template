<template>
  <div>
    {{ aa }}
    <button @click="handleAdd">+1</button>
    <button @click="handleLinkto">跳转</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
let aa = ref(0)
const router = useRouter()
const route = useRoute()
const handleAdd = () => {
  aa.value++
}
const handleLinkto = () => {
  console.log(router)
  console.log(route)

  router.push({ path: 'home' })
}
</script>
<style scope lang="scss"></style>
