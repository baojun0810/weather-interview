import type { IWeatherFilters, IWeatherFiltersErrors } from './interface';

export const DEFAULT_WEATHER_FILTERS: IWeatherFilters = {
	city: '',
	country: '',
};

export const DEFAULT_WEATHER_FILTERS_ERRORS: IWeatherFiltersErrors = {
	city: '',
};
