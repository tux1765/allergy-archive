import { Preferences } from '@capacitor/preferences'

const getKeys = () => {
	return Preferences.keys()
}

export { getKeys }