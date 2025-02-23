import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('~/views/MainPage.vue'),
	},
	{
		path: '/parks',
		children: [
			{ path: 'singing', component: () => import('~/views/parks/SingingPark.vue') },
			{ path: 'troldomy', component: () => import('~/views/parks/TroldomyPark.vue') },
      { path: 'giants-world', component: () => import('~/views/parks/GiantsWorldPark.vue') },
      { path: 'light-n-dreams', component: () => import('~/views/parks/LightAndDreamsPark.vue') },
      { path: 'magic-garden', component: () => import('~/views/parks/MagicGardenPark.vue') },
      { path: 'fantastic-park', component: () => import('~/views/parks/FantasticPark.vue') },
    ],
	},
	{
		path: '/production',
		component: () => import('~/views/ProductionPage.vue'),
	},
	{
		path: '/invest',
		component: () => import('~/views/InvestPage.vue'),
	},
	{
		path: '/discount',
		component: () => import('~/views/DiscountPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'error-page',
		component: () => import('~/views/ErrorPage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory('/'),
	routes,
})

router.afterEach(() => {
	window.scrollTo(0, 0)
})

export default router
