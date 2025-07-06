import { CapacitorSQLite } from '@capacitor-community/sqlite';

// Test this first before any database code
const testPlugin = async () => {
	try {
		console.log('Testing SQLite plugin...');
		const result = await CapacitorSQLite.echo({ value: 'test' });
		console.log('Plugin working:', result);
	} catch (error) {
		console.error('Plugin not available:', error);
	}
}

export {testPlugin}
