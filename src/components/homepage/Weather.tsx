import { WeatherStyled } from '../../pages/homepage/style';
import WeatherDetails from './WeatherDetails';
import WeatherSearchHistory from './WeatherSearchHistory';

const Weather = () => {
	return (
		<WeatherStyled>
			<WeatherDetails />
			<WeatherSearchHistory />
		</WeatherStyled>
	);
};

export default Weather;
