<template>
	<q-page class="flex flex-center">
		<food-list />
		<q-btn
			color="black"
			text-color="white"
			label="Add Food"
			@click="router.push('/add')"
			class="absolute-bottom-right q-mr-lg q-mb-lg"
			rounded
			icon="add"
		/>
	</q-page>
</template>

<script setup>
import FoodList from '../components/FoodList.vue'
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
