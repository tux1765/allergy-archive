<template>
	<q-table
		title="Food"
		:rows="foods"
		:columns="columns"
		no-data-label="Add food to get started!"
		virtual-scroll
		hide-bottom
		@row-click="onRowClick"
	>
		<template #body-cell-safe="props">
			<q-td :props="props">
				<q-badge :color="getSafetyColor(props.value)" :label="props.value"/>
			</q-td>
		</template>
	</q-table>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

defineProps({
	foods: {
		type: Array,
		default: () => []
	}
})

const onRowClick = (row, evt) => {
	router.push(`/food/${evt.id}`)
}

const columns = [
	{name: 'name', required: true, label: 'Name', align: 'left', field: 'name'},
	{name: 'brand', label: 'Brand', align: 'left', field: 'brand', format: val => val ?? 'None'},
	{name: 'store', label: 'Store', align: 'left', field: 'store', format: val => val ?? 'None'},
	{name: 'safe', required: true, label: 'Is Safe', align: 'left', field: 'isSafe'},
]

const getSafetyColor = (value) => {
	switch (value) {
		case 'Unsafe':
			return 'red'
		case 'Safe':
			return 'green'
		default:
			return 'orange'
	}
}
</script>