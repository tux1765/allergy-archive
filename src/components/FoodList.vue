<template>
	<q-list>
		<q-item v-for="item in allFoods" :key="item.id">
			{{item.name}}
		</q-item>
	</q-list>
</template>

<script setup>
import {db} from '../db/db.js'
import {liveQuery} from 'dexie'
import {onMounted, onUnmounted, ref} from 'vue'

const allFoods = ref([])
let dbSubscription
onMounted(() => {
	const foodQuery = liveQuery(() => db.foods.toArray())
	dbSubscription = foodQuery.subscribe({
		next: data => {allFoods.value = data},
		error: err => {console.log(err)}
	})
})

onUnmounted(() => {
	dbSubscription.unsubscribe()
})
</script>