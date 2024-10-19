import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/auth',
      name: 'authentication',
      // component: () => import('@/views/BaseLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login-page',
          component: () => import('@/pages/auth/Login.vue'),
        },
        {
          path: 'signup',
          name: 'signup-page',
          component: () => import('@/pages/auth/Signup.vue'),
        }
      ]
    }
  ]
}
)

export default router
