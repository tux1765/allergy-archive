<template>
	<MainLayout>
		<FoodForm :foodToEdit="foodToEdit" />
	</MainLayout>
</template>

<script setup>
import FoodForm from 'components/FoodForm.vue'
import MainLayout from 'layouts/MainLayout.vue'
import {useFoodStore} from 'stores/store.js'

const props = defineProps({
	id: null
})

const foodStore = useFoodStore()
const foodToEdit = foodStore.getFoodById(props.id)
</script>