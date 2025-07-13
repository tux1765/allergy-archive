import {acceptHMRUpdate, defineStore} from 'pinia'
import {db} from '@/db/db'
import {liveQuery} from 'dexie'

export const useFoodStore = defineStore('foodStore', {
	state: () => ({
		foods: [],
		dbSubscription: null
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
		addFood({foodObj}) {
			return db.foods.add({...foodObj})
		},
		deleteFood({foodId}) {
			return db.foods.where('id').equals(foodId).delete()
		},
		initDb() {
			const foodQuery = liveQuery(() => db.foods.toArray())
			this.dbSubscription = foodQuery.subscribe({
				next: data => {this.foods = data},
				error: err => {console.error(`Error with loading the database.`, err)}
			})
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useFoodStore, import.meta.hot))
}
