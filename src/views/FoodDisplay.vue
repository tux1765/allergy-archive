<template>
	<q-page>
		{{foodStore.getAllFoods.find(item => item.id === parseInt(id))}}
	</q-page>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'

const foodStore = useFoodStore()

defineProps({
	id: null
})
</script>