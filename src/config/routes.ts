import { createRouter, createWebHistory } from 'vue-router';
import Anchor from '@/pages/Anchor.vue';
import Button from '@/pages/Button.vue';
import Heading from '@/pages/Heading.vue';
import References from '@/pages/References.vue';

const routes = [
  { path: '/', name: 'heading', component: Heading },
  { path: '/anchor', name: 'anchor', component: Anchor },
  { path: '/button', name: 'button', component: Button },
  { path: '/references', name: 'references', component: References },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
