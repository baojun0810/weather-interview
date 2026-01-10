import React from 'react';
import { WeatherSearchHistoryListItemStyled } from '../../pages/homepage/style';
import Button from '../common/Button';
import { BiSearch, BiSolidTrashAlt } from 'react-icons/bi';
import type {
	IWeatherFilters,
	IWeatherInfo,
} from '../../pages/homepage/interface';
import useWeatherStore from '../../pages/homepage/store';
import { searchWeather } from '../../pages/homepage/help';
import { notify } from '../../utils/common';

type Props = {
	weatherInfo: IWeatherInfo;
};

const WeatherSearchHistoryListItem = ({ weatherInfo }: Props) => {
	const removeWeatherHistory = useWeatherStore((s) => s.removeWeatherHistory);
	const setWeatherInfo = useWeatherStore((s) => s.setWeatherInfo);
	const addWeatherHistory = useWeatherStore((s) => s.addWeatherHistory);

	const handleSearch = async () => {
		const filters: IWeatherFilters = {
			city: weatherInfo.city,
			country: weatherInfo.country,
		};

		try {
			searchWeather(filters, setWeatherInfo, addWeatherHistory);
		} catch (e) {
			notify('Opps, something went wroing', 'error');
		}
	};

	const handleRemove = (id: string) => {
		removeWeatherHistory(id);
	};

	return (
		<WeatherSearchHistoryListItemStyled>
			<div className='info'>
				<div className='title'>{`${weatherInfo.city}, ${weatherInfo.country}`}</div>
				<div className='time'>{weatherInfo.dateTime}</div>
			</div>
			<div className='action'>
				<Button icon={<BiSearch size={18} />} onClick={handleSearch} />
				<Button
					icon={<BiSolidTrashAlt size={18} />}
					onClick={() => handleRemove(weatherInfo.id)}
				/>
			</div>
		</WeatherSearchHistoryListItemStyled>
	);
};

export default WeatherSearchHistoryListItem;
