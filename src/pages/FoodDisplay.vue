<template>
	<q-page>
		<q-card flat>
			<q-card-section>
				<div class="text-h6 text-center">{{foodItem.name}}</div>
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
			<q-card-actions align="around">
				<q-btn
					label="Delete"
					flat
					icon="delete"
					@click="deleteFood"
				/>
				<q-btn
					icon="edit"
					:to="`/edit/${props.id}`"
					flat
				>
					Edit
				</q-btn>
			</q-card-actions>
		</q-card>
	</q-page>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {useRouter} from 'vue-router'
import {computed} from 'vue'

const props = defineProps({
	id: null
})

const foodStore = useFoodStore()
const router = useRouter()

const id = process.env.DEXIE_CLOUD ? props.id : parseInt(props.id) // we need to parse the numbers if not using cloud @ indexing

const food = computed(() => {
	return foodStore.getFoodById(id)
})

const foodItem = computed(() => {
	return {
		name: food.value.name,
		brand: food.value.brand ?? 'None',
		store: food.value.store ?? 'None',
		isSafe: food.value.isSafe,
		comments: food.value.notes ?? 'None'
	}
})

const deleteFood = () => {
	foodStore.deleteFood({foodId: id})
	router.push('/')
}
</script>