import React from "react";
import { useWeather } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";
const WeatherList = () => {
  const { data } = useWeather();
  console.log(data);
  return (
    <>
      {data !== null &&
        data.map((item, index) => (
          <WeatherCard data={item} key={index} index={`${index}`} />
        ))}
      {data === null && <h1 className="loading">Retrieving Data...</h1>}
    </>
  );
};

export default WeatherList;
