<template>
	<q-list>
		<div
			v-for="food in foodStore.getAllFoodsSortedByDateDesc"
			:key="food.id"
		>
			<q-slide-item @right="deleteItem({id: food.id})" right-color="red">
				<template
					v-if="$q.platform.isMobile"
					#right
				>
					<q-icon name="delete"/>
				</template>
				<q-item clickable :to="`/food/${food.id}`">
					<q-item-section>
						<q-item-label>{{food.name}}</q-item-label>
					</q-item-section>
				</q-item>
			</q-slide-item>
			<q-separator spaced/>
		</div>
	</q-list>
</template>

<script setup>
import {useFoodStore} from '@/stores/store.js'

const foodStore = useFoodStore()

const deleteItem = async ({id}) => {
	foodStore.deleteFood({foodId: id})
}
</script>