import { WeatherDetailsStyled } from '../../pages/homepage/style';
import useWeatherStore from '../../pages/homepage/store';

const WeatherDetails = () => {
	const weatherInfo = useWeatherStore((s) => s.weatherInfo);

	if (!weatherInfo) return null;

	return (
		<WeatherDetailsStyled>
			<div className='title'>Today Weather</div>
			<div className='celsius'>{weatherInfo.celsius}°</div>
			<div className='temp-range'>
				H: {weatherInfo.tempMax}° L: {weatherInfo.tempMin}°
			</div>
			<div className='location'>{`${weatherInfo.city}, ${weatherInfo.country}`}</div>
			<div className='additional'>
				<div className='info'>{weatherInfo.weather}</div>
				<div className='info'>Humidity: {weatherInfo.humidity}%</div>
				<div className='info'>{weatherInfo.dateTime}</div>
			</div>
			<div className='weather-icon'>
				<img
					src={`https://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@4x.png`}
					alt='weather'
				/>
			</div>
		</WeatherDetailsStyled>
	);
};

export default WeatherDetails;
