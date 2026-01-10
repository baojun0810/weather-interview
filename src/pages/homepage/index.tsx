import React from 'react';
import WeatherToolBar from '../../components/homepage/WeatherToolBar';
import Weather from '../../components/homepage/Weather';

const HomePage = () => {
	return (
		<div>
			<WeatherToolBar />
			<Weather />
		</div>
	);
};

export default HomePage;
