import React from "react";
import ListDropDown from "./ListDropDown";
import WeatherCard from "./WeatherCard";

const Container = () => {
  return (
    <div className="main-container">
      <h1>Weather App</h1>
      <ListDropDown />
      <WeatherCard />
    </div>
  );
};

export default Container;
