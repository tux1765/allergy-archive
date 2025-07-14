<template>
	<q-page>
		<q-card flat>
			<q-card-section>
				<div class="text-h6 text-center">{{food.name}}</div>
				<div
					v-if="foodItem.isSafe === 'Safe'"
					class="text-subtitle2 text-center text-green"
				>
					This item has been marked safe to ingest.
				</div>
				<div
					v-if="foodItem.isSafe === 'Unsafe'"
					class="text-subtitle2 text-center text-red"
				>
					This item has been marked unsafe to ingest.
				</div>
				<div
					v-if="foodItem.isSafe === 'Unknown'"
					class="text-subtitle2 text-center text-orange"
				>
					This item's safety to ingest is unknown.
				</div>
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
		isSafe: food.isSafe,
		comments: food.notes ?? 'None'
	}
})
</script>