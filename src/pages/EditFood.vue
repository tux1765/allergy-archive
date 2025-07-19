<template>
	<MainLayout>
		<EditFoodForm :food="foodStore.getFoodById(props.id)" />
	</MainLayout>
</template>

<script setup>
import EditFoodForm from 'components/EditFoodForm.vue'
import MainLayout from 'layouts/MainLayout.vue'
import {useFoodStore} from 'stores/store.js'

const props = defineProps({
	id: null
})

const foodStore = useFoodStore()
</script>