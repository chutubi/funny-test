import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('@/views/SliderView.vue'),
    },
    {
      path: '/checkboxes',
      name: 'checkboxes',
      component: () => import('@/views/CheckboxView.vue'),
    }
  ],
})

export default router
