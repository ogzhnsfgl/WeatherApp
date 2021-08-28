import React, { useEffect } from "react";
import Header from "./Header";
import WeatherList from "./WeatherList";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";
import { useCity } from "../context/CityContext";
import Geolocation from "./Geolocation";

const WeatherContainer = () => {
  // Get data from hooks
  const { city } = useCity();
  const { data, setData } = useWeather();

  //Data çekilecek ve setData ile context'e yazılacak.

  Geolocation();

  useEffect(() => {
    const getData = async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
      );
      setData(response.data.daily);
    };
    getData(city);
  }, [city]);

  return (
    <div className="weather-container">
      <Header />
      <WeatherList />
    </div>
  );
};

export default WeatherContainer;
