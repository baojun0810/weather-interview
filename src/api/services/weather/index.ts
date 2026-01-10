import request from '../../request';
import type {
	GetWeatherInfoRequest,
	GetWeatherInfoResponse,
} from './interface';

const getWeatherInfo = async (params: GetWeatherInfoRequest) => {
	const searchParams = new URLSearchParams({
		q: Object.entries(params)
			.map(([_, value]) => value)
			.join(','),
		appid: import.meta.env.VITE_OPEN_WEATHER_SECRET,
	});

	const response = await request.get<GetWeatherInfoResponse>(
		`/data/2.5/weather?${searchParams.toString()}`
	);

	return response.data;
};

const WeatherServices = {
	getWeatherInfo,
};

export default WeatherServices;
