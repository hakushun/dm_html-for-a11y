import { createRouter, createWebHistory } from 'vue-router';
import Heading from '@/pages/Heading.vue';
import References from '@/pages/References.vue';

const routes = [
  { path: '/', name: 'heading', component: Heading },
  { path: '/references', name: 'references', component: References },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
