<template>
	<q-page>
		<FoodList v-if="foodStore.getAllFoods.length > 0"/>
		<div v-else class="text-center">
			Add Food items to get started!
		</div>
	</q-page>
</template>

<script setup>
import FoodList from '@/components/FoodList.vue'
import {useFoodStore} from '@/stores/store.js'

const foodStore = useFoodStore()
</script>
