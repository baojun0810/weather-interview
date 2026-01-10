import React from 'react';
import {
	WeatherSearchHistoryListStyled,
	WeatherSearchHistoryStyled,
} from '../../pages/homepage/style';
import WeatherSearchHistoryListItem from './WeatherSearchHistoryListItem';
import Empty from '../common/Empty';
import useWeatherStore from '../../pages/homepage/store';

const WeatherSearchHistory = () => {
	const weatherHistoryList = useWeatherStore((s) => s.weatherHistoryList);

	return (
		<WeatherSearchHistoryStyled>
			<div className='title'>Search History</div>
			{weatherHistoryList.length ? (
				<WeatherSearchHistoryListStyled>
					{weatherHistoryList.map((item) => (
						<WeatherSearchHistoryListItem
							key={item.id}
							weatherInfo={item}
						/>
					))}
				</WeatherSearchHistoryListStyled>
			) : (
				<Empty title='Weather history is empty' />
			)}
		</WeatherSearchHistoryStyled>
	);
};

export default WeatherSearchHistory;
