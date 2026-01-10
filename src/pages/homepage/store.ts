import { create } from 'zustand';
import type { IWeatherInfo } from './interface';
import storage from '../../utils/storage';

interface IWeatherState {
	weatherInfo?: IWeatherInfo;
	setWeatherInfo: (info: IWeatherInfo) => void;
	weatherHistoryList: IWeatherInfo[];
	addWeatherHistory: (info: IWeatherInfo) => void;
	removeWeatherHistory: (id: string) => void;
}

const useWeatherStore = create<IWeatherState>((set) => ({
	weatherInfo: undefined,
	setWeatherInfo: (info) => set(() => ({ weatherInfo: info })),
	weatherHistoryList: storage.get('weatherHistory') ?? [],
	addWeatherHistory: (info) =>
		set((state) => {
			const updatedList = [info, ...state.weatherHistoryList];

			storage.set('weatherHistory', updatedList);

			return { weatherHistoryList: updatedList };
		}),
	removeWeatherHistory: (id) =>
		set((state) => {
			const updatedList = state.weatherHistoryList.filter(
				(item) => item.id !== id
			);

			storage.set('weatherHistory', updatedList);

			return { weatherHistoryList: updatedList };
		}),
}));

export default useWeatherStore;
