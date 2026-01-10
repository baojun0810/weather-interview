type Nullable<T> = T | null;

const storage = {
	set<T>(key: string, value: T): void {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.error(`Error setting localStorage key "${key}":`, err);
		}
	},

	get<T>(key: string, defaultValue: Nullable<T> = null): Nullable<T> {
		try {
			const value = localStorage.getItem(key);
			return value ? (JSON.parse(value) as T) : defaultValue;
		} catch (err) {
			console.error(`Error getting localStorage key "${key}":`, err);
			return defaultValue;
		}
	},

	remove(key: string): void {
		try {
			localStorage.removeItem(key);
		} catch (err) {
			console.error(`Error removing localStorage key "${key}":`, err);
		}
	},

	clear(): void {
		try {
			localStorage.clear();
		} catch (err) {
			console.error('Error clearing localStorage:', err);
		}
	},

	has(key: string): boolean {
		return localStorage.getItem(key) !== null;
	},
};

export default storage;
