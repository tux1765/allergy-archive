<template>
	<MainLayout>
		<FoodList v-if="foodStore.getAllFoods.length > 0"/>
		<div v-else class="text-center">
			Add Food items to get started, or login to access your synced items.
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from 'layouts/MainLayout.vue'
import FoodList from 'components/FoodList.vue'
import {useFoodStore} from 'stores/store.js'

const foodStore = useFoodStore()
</script>
