<script setup>

</script>

<template>
  <section>
    <div><img alt="" src="@/assets/logo-vue.svg"></div>
    <div><img alt="" src="@/assets/logo-react.svg"></div>
    <div><img alt="" src="@/assets/logo-android.svg"></div>
    <div><img alt="" src="@/assets/logo-ios.svg"></div>
    <div><img alt="" src="@/assets/logo-nodejs.svg"></div>
    <div><img alt="" src="@/assets/logo-java.svg"></div>
    <div><img alt="" src="@/assets/logo-electron.svg"></div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--size-main-width);
  margin: 0 auto;
}

section div {
}

section img {
  width: 64px;
  transition: all 150ms ease;
}

section img:hover {
  transform: scale(1.5);
}
</style>
