import Dexie from 'dexie'
import dexieCloud from 'dexie-cloud-addon'

export const db = new Dexie('allergyDb', {addons: process.env.DEXIE_CLOUD ? [dexieCloud] : []})

if (process.env.DEXIE_CLOUD) {
	console.debug('Initializing Cloud DB')
	db.version(1).stores({
		foods: '@id, name, brand, notes, store, isSafe, dateAdded'
	})
	db.cloud.configure({
		databaseUrl: process.env.DEXIE_DB_URL,
		requireAuth: false // optional
	});
} else {
	// TODO: figure out if this is really needed
	db.version(1).stores({
		foods: '++id, name, brand, notes, store, isSafe, dateAdded'
	})
}