import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SwitchyButton from '@/views/SwitchyButton.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'switchyButton',
      component: SwitchyButton,
    },
  ],
});

export default router;
