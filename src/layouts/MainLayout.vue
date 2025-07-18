<template>
	<q-layout view="lHh Lpr lFf" >
		<q-header bordered>
			<q-toolbar>
				<q-btn
					v-if="route.path !== '/'"
					flat
					dense
					round
					icon="arrow_back_ios"
					aria-label="Menu"
					@click="navigateBack"
				/>
				<q-avatar>
					<img src="icons/peanut640x640.png" />
				</q-avatar>
				<q-toolbar-title>
					Allergy Archive
				</q-toolbar-title>
				<q-btn
					:label="foodStore.user.isLoggedIn ? 'Logout' : 'Login'"
					flat
					@click="foodStore.user.isLoggedIn ? handleLogout() : handleLogin()"
				/>
			</q-toolbar>
		</q-header>
		<q-footer bordered>
			<q-tabs v-model="tab" indicator-color="transparent">
				<q-route-tab name="home" label="Home" icon="home" to="/" />
				<q-route-tab name="add" label="Add Food" icon="add" to="/add"/>
			</q-tabs>
		</q-footer>
		<q-page-container>
			<q-page>
				<slot></slot>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import {db} from '@/db/db'
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useFoodStore} from 'stores/store.js'

const foodStore = useFoodStore()

const route = useRoute()
const router = useRouter()

const tab = ref('home')

const navigateBack = () => {
	router.go(-1)
}

const handleLogin = async () => {
	await db.cloud.login()
}

const handleLogout = async () => {
	await db.cloud.logout()
}
</script>
