<template>
	<q-page>
		<FoodList v-if="foodStore.getAllFoods.length > 0"/>
		<div v-else>
			Add Food items to get started!
		</div>
	</q-page>
</template>

<script setup>
import FoodList from '@/components/FoodList.vue'
import {db} from 'src/db/db.js'
import {useFoodStore} from '@/stores/store.js'
import {liveQuery} from 'dexie'
import {onMounted, onUnmounted} from 'vue'

const foodStore = useFoodStore()

let dbSubscription
onMounted(() => {
	const foodQuery = liveQuery(() => db.foods.toArray())
	dbSubscription = foodQuery.subscribe({
		next: data => {foodStore.$patch({foods: data})},
		error: err => {console.error(`Error with loading the database.`, err)}
	})
})

onUnmounted(() => {
	dbSubscription.unsubscribe()
})
</script>
