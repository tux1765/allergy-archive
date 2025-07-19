<template>
	<MainLayout>
		<FoodForm :foodToEdit="foodStore.getFoodById(props.id)" />
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
</script>