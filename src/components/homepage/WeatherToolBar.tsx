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

	//adout zustand here
	const setWeatherInfo = useWeatherStore((s) => s.setWeatherInfo);
	const addWeatherHistory = useWeatherStore((s) => s.addWeatherHistory);

	//handle form search
	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		//validate data using zod
		const validate = weatherSearchSchema.safeParse(weatherFilters);

		if (!validate.success) {
			setWeatherErrors(mapError(validate.error));
			setLoading(false);

			return;
		}

		//call api and set data
		try {
			await searchWeather(
				weatherFilters,
				setWeatherInfo,
				addWeatherHistory
			);

			//success and reset here
			reset();
		} catch (e) {
			if (axios.isAxiosError(e)) {
				//location not found
				if (e.response?.data.cod === '404') setInvalidLocation(true);
				else notify('Opps, something went wrong', 'error');
			} else notify('Opps, something went wrong', 'error');
		} finally {
			setLoading(false);
		}
	};

	const reset = () => {
		setWeatherFilters(DEFAULT_WEATHER_FILTERS);
		setWeatherErrors(DEFAULT_WEATHER_FILTERS_ERRORS);
		setInvalidLocation(false);
	};

	return (
		<WeatherToolBarStyled>
			<form onSubmit={(e) => handleSearch(e)}>
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
					<SearchButtonStyled type='submit'>
						{loading ? (
							<LoadingSpinStyled />
						) : (
							<BiSearch color='white' className='search-icon' />
						)}
					</SearchButtonStyled>
				</div>
			</form>
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
