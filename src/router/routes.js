const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{path: '', component: () => import('src/views/IndexPage.vue')},
			{path: '/add', component: () => import('src/views/AddFood.vue')},
			{path: '/edit/:id', component: () => import('@/views/EditFood.vue'), props: true},
			{path: '/food/:id', component: () => import('src/views/FoodDisplay.vue'), props: true}
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/views/ErrorNotFound.vue')
	}
]

export default routes
