<template>
	<q-page class="flex flex-center">
		<q-btn
			color="black"
			text-color="white"
			label="Add Food"
			@click="router.push('/add')"
		/>
	</q-page>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
