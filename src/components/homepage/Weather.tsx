import { WeatherStyled } from "../../pages/homepage/style";
import WeatherDetails from "./WeatherDetails";
import WeatherSearchHistory from "./WeatherSearchHistory";
import Empty from "../common/Empty";
import useWeatherStore from "../../pages/homepage/store";

const Weather = () => {
  const weatherInfo = useWeatherStore((s) => s.weatherInfo);

  return (
    <WeatherStyled>
      {weatherInfo ? (
        <>
          <WeatherDetails />
          <WeatherSearchHistory />
        </>
      ) : (
        <Empty
          title="No Weather Data Yet"
          description="Search for a city above to see the current weather conditions and start exploring!"
        />
      )}
    </WeatherStyled>
  );
};

export default Weather;
