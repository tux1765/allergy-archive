<template>
	<q-table
		style="max-height: calc(100vh - 150px)"
		title="Food"
		:rows="foods"
		row-key="name"
		:columns="columns"
		no-data-label="Add food to get started!"
		virtual-scroll
		:pagination="pagination"
		:rows-per-page-options="[0]"
		@row-click="onRowClick"
		:filter="filter"
		:hide-bottom="foods.length > 0"
	>
		<template v-slot:top-right>
			<q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
				<template v-slot:append>
					<q-icon name="search"/>
				</template>
			</q-input>
		</template>
		<template #body-cell-safe="props">
			<q-td :props="props">
				<q-badge :color="getSafetyColor(props.value)" :label="props.value"/>
			</q-td>
		</template>
		<template #no-data="{ message }">
			<div class="full-width row flex-center text-accent q-gutter-sm">
				<span>
					{{ message }}
				</span>
			</div>
		</template>
	</q-table>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'

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

const filter = ref('')

const pagination = ref({
	sortBy: 'date',
	rowsPerPage: [0]
})

const columns = [
	{name: 'name', required: true, label: 'Name', align: 'left', field: 'name'},
	{name: 'brand', label: 'Brand', align: 'left', field: 'brand', format: val => val ?? 'None'},
	{name: 'store', label: 'Store', align: 'left', field: 'store', format: val => val ?? 'None'},
	{name: 'safe', required: true, label: 'Is Safe', align: 'left', field: 'isSafe'},
	{
		name: 'date',
		required: true,
		label: 'Date Added',
		align: 'left',
		field: 'dateAdded',
		format: val => getDateFormatted({timestamp: val}),
		sort: (a, b) => b - a,
		sortable: true
	},
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

const getDateFormatted = ({timestamp}) => {
	const date = new Date(timestamp)
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}
</script>