import { createRouter, createWebHistory } from 'vue-router';
import Anchor from '@/pages/Anchor.vue';
import Heading from '@/pages/Heading.vue';
import References from '@/pages/References.vue';

const routes = [
  { path: '/', name: 'heading', component: Heading },
  { path: '/anchor', name: 'anchor', component: Anchor },
  { path: '/references', name: 'references', component: References },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
