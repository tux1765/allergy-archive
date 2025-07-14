<template>
	<FoodForm :foodToEdit="foodToEdit" />
</template>

<script setup>
import FoodForm from '@/components/FoodForm.vue'
import {useFoodStore} from '@/stores/store.js'

const props = defineProps({
	id: null
})

const foodStore = useFoodStore()
const foodToEdit = foodStore.getFoodById(parseInt(props.id))
</script>