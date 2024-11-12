<template>
  <section class="tabs">
    <div v-for="item in tabs" :key="item.value" :class="{ select: tab === item.value }" @click="tab = item.value">
      {{ item.label }}
    </div>
  </section>

  <section class="list">
    <div v-for="item in works" :key="item.id">
      <div>
        <WorksItem :data="item"/>
      </div>
    </div>
  </section>
</template>

<script setup>

import WorksItem from '@/views/home/WorksItem.vue';
import { ref } from 'vue';

const tab = ref('all');
const tabs = [
  { value: 'all', label: '全部' },
  { value: 'tools', label: '工具' },
];

const works = [
  { id: '1', type: '工具', name: '工具', desc: '工具描述' },
  { id: '2', type: '工具', name: '工具', desc: '工具描述' },
  { id: '3', type: '工具', name: '工具', desc: '工具描述' },
  { id: '4', type: '工具', name: '工具', desc: '工具描述' },
];

</script>/

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  width: var(--size-main-width);
  margin: 1rem auto;
  column-gap: 2rem;
}

.tabs > div {
  line-height: 30px;
  height: 32px;
  padding: 0 2rem;
  transition: 150ms all linear;
  border: 1px solid var(--color-border-dark);
  border-radius: 16px;
}

.tabs > div.select {
  color: var(--color-text-revers);
  background: var(--color-tab-select);
}

.tabs > div:hover {
  background: var(--color-tab-hover);
}

.list {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
}

.list > div {
  width: 400px;
}

.list > div > div {
  width: 368px;
  height: 300px;
  margin: 16px auto;
}
</style>
