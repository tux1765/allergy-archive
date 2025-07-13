<template>
	<q-page>
		<FoodList v-if="foodList.length > 0"  :food-list="foodList"/>
		<div v-else>
			Add Food items to get started!
		</div>
	</q-page>
</template>

<script setup>
import FoodList from '../components/FoodList.vue'
import {db} from 'src/db/db.js'
import {liveQuery} from 'dexie'
import {onMounted, onUnmounted, ref} from 'vue'

const foodList = ref([])
let dbSubscription
onMounted(() => {
	const foodQuery = liveQuery(() => db.foods.toArray())
	dbSubscription = foodQuery.subscribe({
		next: data => {foodList.value = data},
		error: err => {console.error(`Error with loading the database.`, err)}
	})
})

onUnmounted(() => {
	dbSubscription.unsubscribe()
})
</script>
