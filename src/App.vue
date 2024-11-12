<template>
  <HeaderView/>

  <main>
    <RouterView/>
  </main>
</template>

<script setup>
import HeaderView from '@/views/HeaderView.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
main {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding-top: 60px;
}
</style>
