<template>
	<q-form @submit="editFood">
		<q-card flat class="q-pa-md">
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
import {useQuasar} from 'quasar'
import {defineProps} from 'vue'
import {ref} from 'vue'

const $q = useQuasar()
const foodStore = useFoodStore()

const props = defineProps({
	food: {}
})

const foodObj = ref({...props.food})
const isSafeOptions = ['Safe', 'Unsafe', 'Unknown']

const editFood = async () => {
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