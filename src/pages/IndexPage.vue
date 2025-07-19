<template>
	<MainLayout>
		<FoodList :foods="foods"/>
	</MainLayout>
</template>

<script setup>
import MainLayout from 'layouts/MainLayout.vue'
import FoodList from 'components/FoodList.vue'
import {useFoodStore} from 'stores/store.js'
import {computed} from 'vue'

const foodStore = useFoodStore()
const foods = computed(() => foodStore.getAllFoods)
</script>
