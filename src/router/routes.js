const routes = [
	{
		path: '/',
		component: () => import('pages/IndexPage.vue'),
	},
	{
		path: '/add',
		component: () => import('pages/AddFood.vue'),
	},
	{
		path: '/edit/:id',
		component: () => import('pages/EditFood.vue'),
		props: true
	},
	{
		path: '/food/:id',
		component: () => import('pages/FoodDisplay.vue'),
		props: true
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue')
	}
]

export default routes
