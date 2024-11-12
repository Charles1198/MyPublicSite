<template>
  <section class="introduce">
    <p>我是 Charles，一个普普通通的软件开发人员 <br> 参加工作很久，渐渐意识到终身学习的必要性，决心在这里留下学习的脚印</p>
  </section>

  <p class="section-title">我的技能</p>
  <SkillsSection/>

  <p class="section-title">我的作品</p>
  <WorksSection/>
</template>

<script setup>


import SkillsSection from '@/views/home/SkillsSection.vue';
import WorksSection from '@/views/home/WorksSection.vue';
</script>

<style scoped>
.introduce {
  padding: 120px 0;
  text-align: center;
}

.introduce p {
  font-size: 1.5rem;
  line-height: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  color: var(--color-secondary);
  column-gap: 2rem;
}

.section-title::before,
.section-title::after {
  display: inline-block;
  width: 100px;
  height: 1px;
  content: "";
  background: var(--color-middle-light);
}
</style>/


