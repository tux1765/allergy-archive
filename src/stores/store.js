import {acceptHMRUpdate, defineStore} from 'pinia'
import {db} from '@/db/db'
import {liveQuery} from 'dexie'

export const useFoodStore = defineStore('foodStore', {
	state: () => ({
		foods: [],
		user: {},
		dbSubscription: null,
		userSubscription: null
	}),

	getters: {
		getAllFoods: (state) => state.foods,
		getAllFoodsSortedByDateDesc: (state) => {
			return [...state.foods].sort((a, b) => b.dateAdded - a.dateAdded)
		},
		getFoodById: (state) => {
			return (foodId) => state.foods.find(food => food.id === foodId) ?? {}
		}
	},

	actions: {
		addFood({foodObj}) {
			return db.foods.add({...foodObj})
		},
		foodToEdit({foodObj}) {
			return db.foods.put(foodObj)
		},
		deleteFood({foodId}) {
			return db.foods.where('id').equals(foodId).delete()
		},
		async initDb() {
			this.foods = await db.foods.toArray()
			this.user = await db.cloud.currentUser

			const foodQuery = liveQuery(() => db.foods.toArray())
			this.dbSubscription = foodQuery.subscribe({
				next: data => {this.foods = data},
				error: err => {console.error(`Error with loading the database.`, err)}
			})
			this.userSubscription = db.cloud.currentUser.subscribe({
				next: data => {this.user = data},
				error: err => {console.error(`Error with loading the user.`, err)}
			})
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useFoodStore, import.meta.hot))
}
