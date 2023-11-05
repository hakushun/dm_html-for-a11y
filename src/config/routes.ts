import { createRouter, createWebHistory } from 'vue-router';
import Anchor from '@/pages/Anchor.vue';
import Button from '@/pages/Button.vue';
import Heading from '@/pages/Heading.vue';
import List from '@/pages/List.vue';
import References from '@/pages/References.vue';

const routes = [
  { path: '/', name: 'heading', component: Heading },
  { path: '/anchor', name: 'anchor', component: Anchor },
  { path: '/button', name: 'button', component: Button },
  { path: '/list', name: 'list', component: List },
  { path: '/references', name: 'references', component: References },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
