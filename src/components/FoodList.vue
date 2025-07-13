<template>
	<q-list>
		<div
			v-for="food in foodList"
			:key="food.id"
		>
			<q-item clickable>
				<q-item-section>
					<q-item-label>{{food.name}}</q-item-label>
				</q-item-section>
			</q-item>
			<q-separator spaced/>
		</div>
	</q-list>
</template>

<script setup>
defineProps({
	foodList: Array
})
</script>