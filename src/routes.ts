import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/not-found-view.vue'),
    },
    { path: '/', name: 'auth', component: () => import('./views/auth-view.vue') },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/main-view.vue'),
      children: [
        { path: '', name: 'index', component: import('./views/index-view.vue') },
        { path: ':alias', component: import('./views/category-view.vue') },
      ],
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (!authStore.getToken && to.name != 'auth') {
    return { name: 'auth' };
  }
});
