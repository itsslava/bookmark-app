import { createRouter, createWebHistory } from 'vue-router';
import CompTest from './components/comp-test.vue';
import CompTest2 from './components/comp-test-2.vue';
import AuthView from './views/auth-view.vue';
import MainView from './views/main-view.vue';

export const router = createRouter({
  routes: [
    { path: '/', component: AuthView },
    {
      path: '/main',
      component: MainView,
      name: 'main',
      children: [
        { path: '', component: CompTest },
        { path: 'new', component: CompTest2 },
      ],
    },
  ],
  history: createWebHistory(),
});
