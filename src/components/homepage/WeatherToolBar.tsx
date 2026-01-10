import React, { useState } from 'react';
import { WeatherToolBarStyled } from '../../pages/homepage/style';
import InputText from '../common/InputText';
import {
	DEFAULT_WEATHER_FILTERS,
	DEFAULT_WEATHER_FILTERS_ERRORS,
} from '../../pages/homepage/const';
import { weatherSearchSchema } from '../../pages/homepage/schema';
import { LoadingSpinStyled, SearchButtonStyled } from '../common/style';
import { BiSearch, BiSolidError } from 'react-icons/bi';
import { mapError, notify } from '../../utils/common';
import { searchWeather } from '../../pages/homepage/help';
import useWeatherStore from '../../pages/homepage/store';
import axios from 'axios';

const WeatherToolBar = () => {
	const [weatherFilters, setWeatherFilters] = useState(
		DEFAULT_WEATHER_FILTERS
	);
	const [weatherErrors, setWeatherErrors] = useState(
		DEFAULT_WEATHER_FILTERS_ERRORS
	);
	const [invalidLocation, setInvalidLocation] = useState(false);

	const [loading, setLoading] = useState(false);

	const setWeatherInfo = useWeatherStore((s) => s.setWeatherInfo);
	const addWeatherHistory = useWeatherStore((s) => s.addWeatherHistory);

	const handleSearch = async () => {
		setLoading(true);

		const validate = weatherSearchSchema.safeParse(weatherFilters);

		if (!validate.success) {
			setWeatherErrors(mapError(validate.error));
			setLoading(false);

			return;
		}

		try {
			await searchWeather(
				weatherFilters,
				setWeatherInfo,
				addWeatherHistory
			);

			setWeatherErrors(DEFAULT_WEATHER_FILTERS_ERRORS);
			setInvalidLocation(false);
		} catch (e) {
			if (axios.isAxiosError(e)) {
				if (e.response?.data.cod === '404') setInvalidLocation(true);
				else notify('Opps, something went wrong', 'error');
			} else notify('Opps, something went wrong', 'error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<WeatherToolBarStyled>
			<div className='search-container'>
				<div className='search-col'>
					<InputText
						label='City'
						value={weatherFilters.city}
						onChange={(value) =>
							setWeatherFilters((prev) => ({
								...prev,
								city: value,
							}))
						}
						error={weatherErrors.city}
					/>
				</div>
				<div className='search-col'>
					<InputText
						label='Country'
						value={weatherFilters.country}
						onChange={(value) =>
							setWeatherFilters((prev) => ({
								...prev,
								country: value,
							}))
						}
					/>
				</div>
				<SearchButtonStyled onClick={handleSearch}>
					{loading ? (
						<LoadingSpinStyled />
					) : (
						<BiSearch
							color='white'
							size={30}
							className='search-icon'
						/>
					)}
				</SearchButtonStyled>
			</div>
			{invalidLocation && (
				<div className='error-search-callout'>
					<BiSolidError size={24} />
					Invalid city or country. Country, if provided, must be a
					country code (e.g., SG, MY).
				</div>
			)}
		</WeatherToolBarStyled>
	);
};

export default WeatherToolBar;
