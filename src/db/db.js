import Dexie from 'dexie'
import dexieCloud from 'dexie-cloud-addon'

export const db = new Dexie('allergyDb', {addons: process.env.DEXIE_CLOUD_DISABLE ? [] : [dexieCloud] })

if (process.env.DEXIE_CLOUD_DISABLE) {
	// TODO: figure out if this is really needed
	db.version(1).stores({
		foods: '++id, name, brand, notes, store, isSafe, dateAdded'
	})
} else {
	console.debug('Initializing Cloud DB')
	db.version(1).stores({
		foods: '@id, name, brand, notes, store, isSafe, dateAdded'
	})
	db.cloud.configure({
		databaseUrl: process.env.DEXIE_DB_URL ?? 'https://z0nawraem.dexie.cloud',
		requireAuth: false // optional
	})
}