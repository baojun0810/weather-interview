import moment from 'moment';
import type { GetWeatherInfoResponse } from '../../api/services/weather/interface';
import { v4 as uuidv4 } from 'uuid';
import WeatherServices from '../../api/services/weather';
import type { IWeatherFilters, IWeatherInfo } from './interface';

export const extractWeatherInfo = (info: GetWeatherInfoResponse) => ({
	id: uuidv4(),
	celsius: Math.round(info.main.temp - 273.15),
	tempMax: Math.round(info.main.temp_max - 273.15),
	tempMin: Math.round(info.main.temp_min - 273.15),
	dateTime: moment.unix(info.dt).format('DD-MM-YYYY hh:mma'),
	humidity: info.main.humidity,
	weather: info.weather[0].main,
	weatherId: info.weather[0].id,
	weatherIcon: info.weather[0].icon,
	city: info.name,
	country: info.sys.country,
});

export const searchWeather = async (
	weatherFilters: IWeatherFilters,
	setWeatherInfo: (info: IWeatherInfo) => void,
	addWeatherHistory: (info: IWeatherInfo) => void
) => {
	const result = await WeatherServices.getWeatherInfo(weatherFilters);

	const extractedData = extractWeatherInfo(result);

	setWeatherInfo(extractedData);
	addWeatherHistory(extractedData);
};
