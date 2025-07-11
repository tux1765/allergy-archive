<template>
	<q-form @submit="submitForm">
		<q-card flat class="q-pa-md">
			<q-card-section>
				<div class="text-h6">Add Food</div>
			</q-card-section>
			<q-card-section>
				<q-input
					v-model="name"
					label="Name"
					lazy-rules
					:rules="[ val => val && val.length > 0 || 'Please enter a name']"
				/>
				<q-input
					v-model="brand"
					label="Brand (optional)"
				/>
				<q-input
					v-model="store"
					label="Store (optional)"
				/>
				<q-input
					v-model="notes"
					type="textarea"
					label="Notes (optional)"
				/>
			</q-card-section>
			<q-card-actions>
				<q-space/>
				<q-btn
					label="Submit"
					type="submit"
					color="black"
					flat
				/>
			</q-card-actions>
		</q-card>
	</q-form>
</template>

<script setup>
import {db} from '../db/db.js'
import {ref} from 'vue'
import {useQuasar} from 'quasar'

const $q = useQuasar()

const brand = ref('')
const name = ref('')
const notes = ref('')
const store = ref('')

const resetForm = () => {
	name.value = ''
	notes.value = ''
	brand.value = ''
	store.value = ''
}

const submitForm = async () => {
	try {
		const id = await db.foods.add({
			brand: brand.value,
			name: name.value,
			notes: notes.value,
			store: store.value
		})

		$q.notify({
			color: 'green-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `Added ${name.value} to db. Got id: ${id}`
		})
		resetForm()
	} catch (e) {
		console.log(e)
		$q.notify({
			color: 'red-4',
			textColor: 'white',
			icon: 'cloud_done',
			message: `FAILED`
		})
	}
}
</script>