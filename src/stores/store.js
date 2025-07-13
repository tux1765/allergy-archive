import {acceptHMRUpdate, defineStore} from 'pinia'
import {db} from '@/db/db'

export const useFoodStore = defineStore('foodStore', {
	state: () => ({
		foods: []
	}),

	getters: {
		getAllFoods: (state) => state.foods,
		getAllFoodsSortedByIdDesc: (state) => {
			return state.foods.sort((a, b) => b.id - a.id)
		},
		getFoodById: (state) => {
			return (foodId) => state.foods.find(food => food.id === foodId)
		}
	},

	actions: {
		async addFood({foodObj}) {
			return db.foods.add({...foodObj})
		},
		async deleteFood({foodId}) {
			return db.foods.where('id').equals(foodId).delete()
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useFoodStore, import.meta.hot))
}
