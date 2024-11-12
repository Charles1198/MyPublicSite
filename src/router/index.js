import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/home/WorksSection.vue'),
    },
    {
      path: '/blog',
      // name: 'blog',
      // component: () => import('../views/blog/BlogView.vue'),
      children: [
        {
          path: '',
          name: 'blogList',
          component: () => import('../views/blog/BlogView.vue'),
        },
        {
          path: 'create',
          name: 'blogCreate',
          component: () => import('../views/blog/BlogCreateView.vue'),
        }
      ]
    },
  ],
});

export default router;
