<template>
  <div class="switch" @click="handleClick">
    <Transition name="fade-sun">
      <img v-if="theme === 'light'" alt="" class="sun" src="@/assets/sun.svg">
    </Transition>
    <Transition name="fade-moon">
      <img v-if="theme === 'dark'" alt="" class="moon" src="@/assets/moon.svg">
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('light');

const handleClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style scoped>
.switch {
  position: relative;
  width: 44px;
  height: 22px;
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
  border: solid 2px var(--color-border-dark);
  border-radius: 11px;
  background: var(--color-bg-dark);
}

.wrapper img {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-bg);
}

.sun {
  top: 0;
  left: 0;
}

.moon {
  top: 0;
  right: 0;
}

.fade-sun-enter-active,
.fade-sun-leave-active,
.fade-moon-enter-active,
.fade-moon-leave-active {
  transition: all 0.3s ease;
}

.fade-sun-enter-from,
.fade-sun-leave-to {
  transform: translateX(4px);
  opacity: 0;
}

.fade-moon-enter-from,
.fade-moon-leave-to {
  transform: translateX(-4px);
  opacity: 0;
}
</style>
