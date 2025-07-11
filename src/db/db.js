import Dexie from 'dexie'

export const db = new Dexie('allergyDb')
db.version(1).stores({
	foods: '++id, name, brand, notes, store'
})