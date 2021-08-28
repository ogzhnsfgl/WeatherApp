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
