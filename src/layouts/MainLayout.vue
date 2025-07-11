<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn
					v-if="route.path !== '/'"
					flat
					dense
					round
					icon="arrow_back_ios"
					aria-label="Menu"
					@click="navigateHome"
				/>

				<q-toolbar-title>
					Allergy Archive
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view/>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigateHome = () => {
	router.push('/')
}
</script>
