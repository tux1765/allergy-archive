const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{path: '', component: () => import('src/views/IndexPage.vue')},
			{path: '/add', component: () => import('src/views/AddFood.vue')}
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
