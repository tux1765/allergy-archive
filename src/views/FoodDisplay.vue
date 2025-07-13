<template>
	<q-page>
		<q-card flat>
			<q-card-section>
				<div class="text-h6 text-center">{{food.name}}</div>
			</q-card-section>
			<q-card-section>
				Brand: {{foodItem.brand}}
			</q-card-section>
			<q-card-section>
				Store: {{foodItem.store}}
			</q-card-section>
			<q-card-section>
				Comments:
				<q-input v-model="foodItem.comments" disable borderless/>
			</q-card-section>
		</q-card>
	</q-page>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {computed} from 'vue'

const props = defineProps({
	id: null
})

const foodStore = useFoodStore()
const food = foodStore.getFoodById(parseInt(props.id))
const foodItem = computed(() => {
	return {
		name: food.name,
		brand: food.brand ?? 'None',
		store: food.store ?? 'None',
		comments: food.notes ?? 'None'
	}
})
</script>