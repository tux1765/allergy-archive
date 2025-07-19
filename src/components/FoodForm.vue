<template>
	<q-form @submit="handleSubmit">
		<q-card flat class="q-pa-md">
			<q-card-section>
				<div
					v-if="foodToEdit"
					class="text-h6"
				>
					Edit Food Entry: {{ foodObj.name }}
				</div>
				<div v-else>
					Add Food
				</div>
			</q-card-section>
			<q-card-section>
				<q-input
					v-model="foodObj.name"
					label="Name"
					lazy-rules
					:rules="[ val => val && val.length > 0 || 'Please enter a name']"
				/>
				<q-input
					v-model="foodObj.brand"
					label="Brand (optional)"
				/>
				<q-input
					v-model="foodObj.store"
					label="Store (optional)"
				/>
				<q-select
					v-model="foodObj.isSafe"
					label="Is safe to eat (optional)"
					:options="isSafeOptions"
				/>
				<q-input
					v-model="foodObj.notes"
					type="textarea"
					label="Notes (optional)"
				/>
			</q-card-section>
			<q-card-actions>
				<q-space/>
				<q-btn
					label="Add"
					type="submit"
					flat
				/>
			</q-card-actions>
		</q-card>
	</q-form>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {onMounted, ref} from 'vue'
import {useQuasar} from 'quasar'

const foodStore = useFoodStore()
const props = defineProps({
	foodToEdit: {
		type: [Boolean, Object],
		default: false
	}
})
const $q = useQuasar()

const foodObj = ref({
	name: null,
	brand: null,
	store: null,
	notes: null,
	isSafe: 'Unknown'
})
const isSafeOptions = ['Safe', 'Unsafe', 'Unknown']

onMounted(() => {
	if (props.foodToEdit) {
		foodObj.value = {...props.foodToEdit}
	}
})

const resetForm = () => {
	foodObj.value = {
		name: null,
		brand: null,
		store: null,
		notes: null,
		isSafe: 'Unknown'
	}
}

const handleSubmit = () => {
	if (props.foodToEdit) {
		editFoodSubmit()
		return
	}
	addFood()
}

const addFood = async () => {
	try {
		const id = await foodStore.addFood({foodObj: {...foodObj.value, dateAdded: Date.now()}})
		console.debug('Added food with id:', id)
		$q.notify({
			color: 'green-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `Added ${foodObj.value.name} to archive.`,
			timeout: 1500,
			position: 'center'
		})
	} catch (e) {
		console.error(e)
		$q.notify({
			color: 'red-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `Failed to add item`
		})
	}

	resetForm()
}

const editFoodSubmit = async () => {
	try {
		await foodStore.foodToEdit({foodObj: {...foodObj.value}})
		$q.notify({
			color: 'green-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `Edited ${foodObj.value.name} in archive.`,
			timeout: 1500,
			position: 'center'
		})
	} catch (e) {
		console.error(e)
		$q.notify({
			color: 'red-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `Failed to edit item`
		})
	}
}
</script>