<template>
  <header>
    <div class="wrapper">
      <img alt="" class="header-logo" src="@/assets/lovephoto.jpg" @click="handleJumpToHomeView">
      <div class="header-name" @click="handleJumpToHomeView">Charles</div>

      <div class="flex-1"></div>

      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink v-if="false" to="/works">作品</RouterLink>
        <RouterLink to="/blog">博客</RouterLink>

        <LightDarkSwitch/>
      </nav>
    </div>
  </header>
</template>

<script setup>
import LightDarkSwitch from '@/components/LightDarkSwitch.vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const handleJumpToHomeView = () => {
  router.push('/');
};
</script>

<style scoped>
header {
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-header);
  backdrop-filter: blur(8px);
}

.wrapper {
  display: flex;
  align-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  column-gap: 16px;
}

.header-logo {
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
}

.header-name {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

nav {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--color-secondary);
}

nav a:first-of-type {
  border: 0;
}
</style>
