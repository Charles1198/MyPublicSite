<template>
  <span class="top">- {{ data.type }} -</span>
  <div class="main"></div>
  <div class="bottom">
    <span class="name">{{ data.name }}</span>
    <span class="desc">{{ data.desc }}</span>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.top {
  font-size: 14px;
  font-weight: bold;
  color: var(--color-secondary);
}

.main {
  height: 200px;
  margin: 8px 0;
  border-radius: 8px;
  background: #88888818;
}

.main:hover {
  background: #88888828;
}

.bottom span {
  display: block;
}

.name {
  font-weight: bold;
  margin-bottom: 4px;
}

.desc {
  color: var(--color-secondary);
}
</style>
