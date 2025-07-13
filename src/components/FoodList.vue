<template>
	<q-list>
		<div
			v-for="food in foodStore.getAllFoodsSortedByIdDesc"
			:key="food.id"
		>
			<q-item clickable :to="`/food/${food.id}`">
				<q-item-section>
					<q-item-label>{{food.name}}</q-item-label>
				</q-item-section>
			</q-item>
			<q-separator spaced/>
		</div>
	</q-list>
</template>

<script setup>
import {useFoodStore} from '@/stores/store.js'

const foodStore = useFoodStore()
</script>