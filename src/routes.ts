import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/not-found-view.vue'),
    },
    { path: '/', component: () => import('./views/auth-view.vue') },
    {
      path: '/main',
      component: () => import('./views/main-view.vue'),
      name: 'main',
      children: [
        { path: '', component: import('./views/index-view.vue') },
        { path: ':alias', component: import('./views/category-view.vue') },
      ],
    },
  ],
  history: createWebHistory(),
});
