export type IWeatherFilters = {
	city: string;
	country: string;
};

export type IWeatherFiltersErrors = Omit<IWeatherFilters, 'country'>;

export type IWeatherInfo = {
	id: string;
	celsius: number;
	tempMax: number;
	tempMin: number;
	dateTime: string;
	humidity: number;
	weather: string;
	weatherId: number;
	weatherIcon: string;
	city: string;
	country: string;
};
