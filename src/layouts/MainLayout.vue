<template>
	<q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
		<q-header bordered class="bg-grey-3 text-black">
			<q-toolbar>
				<q-btn
					v-if="route.path !== '/'"
					flat
					dense
					round
					icon="arrow_back_ios"
					aria-label="Menu"
					@click="navigateBack"
					class="text-black"
				/>

				<q-toolbar-title class="text-black">
					Allergy Archive
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-footer bordered class="bg-grey-3 text-primary text-black">
			<q-tabs v-model="tab" indicator-color="transparent">
				<q-route-tab name="home" label="Home" icon="home" to="/" />
				<q-route-tab name="add" label="Add Food" icon="add" to="/add"/>
			</q-tabs>
		</q-footer>

		<q-page-container>
			<router-view/>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const tab = ref('home')

const navigateBack = () => {
	router.go(-1)
}
</script>
