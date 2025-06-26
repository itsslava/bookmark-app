import { createRouter, createWebHistory } from 'vue-router';
import CompTest from './components/comp-test.vue';
import CompTest2 from './components/comp-test-2.vue';

export const router = createRouter({
  routes: [
    { path: '/', component: () => import('./views/auth-view.vue') },
    {
      path: '/main',
      component: () => import('./views/main-view.vue'),
      name: 'main',
      children: [
        { path: '', component: CompTest },
        { path: 'new', component: CompTest2 },
      ],
    },
  ],
  history: createWebHistory(),
});
