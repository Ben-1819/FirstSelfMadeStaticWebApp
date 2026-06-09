import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SwitchyButton from '@/views/SwitchyButton.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/switchyButton',
      name: 'SwitchyButton',
      component: SwitchyButton,
    },
  ],
});

export default router;
