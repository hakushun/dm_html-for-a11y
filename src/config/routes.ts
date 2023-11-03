import { createRouter, createWebHistory } from 'vue-router';
import Heading from '@/pages/Heading.vue';

const routes = [{ path: '/', name: 'heading', component: Heading }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
