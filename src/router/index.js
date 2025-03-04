import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('~/views/MainPage.vue'),
    meta: { title: 'main' },
  },
  {
    path: '/singing',
    component: () => import('~/views/SingingPark.vue'),
    meta: { title: 'SINGING' },
  },
  {
    path: '/troldomy',
    component: () => import('~/views/TroldomyPark.vue'),
    meta: { title: 'TROLDOMY' },
  },
  {
    path: '/giants-world',
    component: () => import('~/views/GiantsWorldPark.vue'),
    meta: { title: 'GIANTS_WORLD' },
  },
  {
    path: '/light-and-dreams',
    component: () => import('~/views/LightAndDreamsPark.vue'),
    meta: { title: 'LIGHT_AND_DREAMS' },
  },
  {
    path: '/magic-garden',
    component: () => import('~/views/MagicGardenPark.vue'),
    meta: { title: 'MAGIC_GARDEN' },
  },
  {
    path: '/fantastic-park',
    component: () => import('~/views/FantasticPark.vue'),
    meta: { title: 'FANTASTIC_PARK' },
  },
  {
    path: '/company',
    component: () => import('~/views/CompanyPage.vue'),
    meta: { title: 'about' },
  },
  {
    path: '/production',
    component: () => import('~/views/ProductionPage.vue'),
    meta: { title: 'production' },
  },
  {
    path: '/invest',
    component: () => import('~/views/InvestPage.vue'),
    meta: { title: 'invest' },
  },
  {
    path: '/discount',
    component: () => import('~/views/DiscountPage.vue'),
    meta: { title: 'discount' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error-page',
    component: () => import('~/views/ErrorPage.vue'),
    meta: { title: 'pageNotFound' },
  },
]

const BASE_URL = (import.meta.env.VITE_BASE_URL ?? '/').replace(/\/$/, '')

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
  strict: true,
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
