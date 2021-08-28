// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// require("dotenv").config();
// const WeatherDataContext = createContext();

// const WeatherDataProvider = ({ children }) => {
//   /* City Code */
//   const [cityCode, setCityCode] = useState({ lon: "28.58", lat: "41.05" });
//   const { lon, lat } = cityCode;

//   /* Weather Data */
//   const [weatherData, setweatherData] = useState({});

//   /* UseEffect lon,lat changes */
//   useEffect(() => {
//     axios(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
//     )
//       .then(({ data }) => setweatherData(data.daily))
//       .catch((e) => console.log(e));
//   }, [lon, lat]);

//   /* Values that provide to components */

//   const values = {
//     weatherData,
//     setweatherData,
//     cityCode,
//     setCityCode,
//     lon,
//     lat,
//   };

//   return (
//     <WeatherDataContext.Provider value={values}>
//       {children}
//     </WeatherDataContext.Provider>
//   );
// };

// const useWeatherData = () => useContext(WeatherDataContext);

// export { useWeatherData, WeatherDataProvider };

import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const values = { data, setData };
  console.log(data);

  return (
    <WeatherContext.Provider value={values}>
      {children}{" "}
    </WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
