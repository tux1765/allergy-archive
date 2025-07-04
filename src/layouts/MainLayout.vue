<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
				/>

				<q-toolbar-title>
					Allergy Archive
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
		>
			<q-list>
				<q-item-label
					header
				>
					Essential Links
				</q-item-label>

				<q-item
					clickable
					@click="navigateHome"
				>
					<q-item-section avatar>
						<q-icon name="home"/>
					</q-item-section>
					<q-item-section>
						<q-item-label>Home</q-item-label>
					</q-item-section>
				</q-item>
				<EssentialLink
					v-for="item in linksList"
					:key="item.title"
					:item="item"
				/>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view/>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

const router = useRouter()

const linksList = ref([
	{
		title: 'Docs',
		caption: 'quasar.dev',
		icon: 'school',
		link: 'https://quasar.dev'
	},
	{
		title: 'Github',
		caption: 'github.com/quasarframework',
		icon: 'code',
		link: 'https://github.com/quasarframework'
	},
	{
		title: 'Discord Chat Channel',
		caption: 'chat.quasar.dev',
		icon: 'chat',
		link: 'https://chat.quasar.dev'
	},
	{
		title: 'Forum',
		caption: 'forum.quasar.dev',
		icon: 'record_voice_over',
		link: 'https://forum.quasar.dev'
	},
	{
		title: 'Twitter',
		caption: '@quasarframework',
		icon: 'rss_feed',
		link: 'https://twitter.quasar.dev'
	},
	{
		title: 'Facebook',
		caption: '@QuasarFramework',
		icon: 'public',
		link: 'https://facebook.quasar.dev'
	},
	{
		title: 'Quasar Awesome',
		caption: 'Community Quasar projects',
		icon: 'favorite',
		link: 'https://awesome.quasar.dev'
	}
])

const leftDrawerOpen = ref(false)

const navigateHome = () => {
	router.push('/')
}

const toggleLeftDrawer = () => {
	leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
