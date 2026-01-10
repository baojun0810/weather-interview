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
				<Empty
					title='No History Yet'
					description='Search for a city above to see the current weather conditions and start exploring!'
				/>
			)}
		</WeatherSearchHistoryStyled>
	);
};

export default WeatherSearchHistory;
