import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherDataContext = createContext();

const WeatherDataProvider = ({ children }) => {
  /* City Code */
  const [cityCode, setCityCode] = useState({ lon: "28.58", lat: "41.05" });
  const { lon, lat } = cityCode;

  /* Weather Data */
  const [weatherData, setweatherData] = useState({});

  /* UseEffect for ComponentDidMount */
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=c3bd60f08b2d73cfb02979b704cee04a`
    )
      .then(({ data }) => setweatherData(data.daily))
      .catch((e) => console.log(e));
  }, [lon, lat]);

  /* Values that provide to components */

  const values = {
    weatherData,
    setweatherData,
    cityCode,
    setCityCode,
    lon,
    lat,
  };

  return (
    <WeatherDataContext.Provider value={values}>
      {children}
    </WeatherDataContext.Provider>
  );
};

const useWeatherData = () => useContext(WeatherDataContext);

export { useWeatherData, WeatherDataProvider };
