import {defineStore, acceptHMRUpdate} from 'pinia'

export const useFoodStore = defineStore('foodStore', {
	state: () => ({
		foods: []
	}),

	getters: {
		getAllFoods: (state) => state.foods,
		getAllFoodsSortedByIdDesc: (state) => {
			return state.foods.sort((a, b) => b.id - a.id)
		}
	},

	actions: {
		updateDb(data) {
			this.foods = data
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useFoodStore, import.meta.hot))
}
