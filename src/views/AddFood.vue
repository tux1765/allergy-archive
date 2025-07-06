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
import {ref} from 'vue'
import {useQuasar} from 'quasar'

const $q = useQuasar()

const brand = ref(null)
const name = ref(null)
const notes = ref(null)
const store = ref(null)

const submitForm = () => {
	$q.notify({
		color: 'green-4',
		textColor: 'white',
		icon: 'cloud_done',
		message: 'Submitted'
	})
}
</script>