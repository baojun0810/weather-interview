import { WeatherStyled } from '../../pages/homepage/style';
import WeatherDetails from './WeatherDetails';
import WeatherSearchHistory from './WeatherSearchHistory';
import useWeatherStore from '../../pages/homepage/store';

const Weather = () => {
	const weatherInfo = useWeatherStore((s) => s.weatherInfo);

	if (!weatherInfo) return <WeatherSearchHistory />;

	return (
		<WeatherStyled>
			<WeatherDetails />
			<WeatherSearchHistory />
		</WeatherStyled>
	);
};

export default Weather;
