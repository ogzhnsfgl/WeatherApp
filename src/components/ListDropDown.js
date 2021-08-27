import _, { keys } from "lodash";
import React, { useEffect, useState } from "react";
import { useWeatherData } from "../context/WeatherDataContext";
import Geolocation from "./Geolocation";

let cityList = {
  istanbul: { lon: "28.58", lat: "41.01" },
  ankara: { lon: "32.87", lat: "39.93" },
  adana: { lon: "35.32", lat: "37.00" },
  kocaeli: { lon: "29.92", lat: "40.76" },
  artvin: { lon: "41.83", lat: "41.18" },
  izmir: { lon: "38.42", lat: "27.14" },
};

const ListDropDown = () => {
  const { setCityCode } = useWeatherData();

  function handleClick(e) {
    e.preventDefault();
    setCityCode({
      lon: cityList[`${e.target.value}`].lon,
      lat: cityList[`${e.target.value}`].lat,
    });
  }

  const location = Geolocation();

  useEffect(() => {
    if (location.loaded === true) {
      let lat = location.coordinates.lat.toFixed(2).toString();
      let lon = location.coordinates.lon.toFixed(2).toString();
      let locationFixed = {
        lat: lat,
        lon: lon,
      };
      setCityCode(locationFixed);
      cityList.konum = { lat: locationFixed.lat, lon: locationFixed.lon };
    } else {
      delete cityList.konum;
    }
  }, [
    location.coordinates.lat,
    location.coordinates.lon,
    location.loaded,
    setCityCode,
  ]);

  return (
    <div className="drop-down container">
      <select
        id="city"
        onChange={(e) => handleClick(e)}
        className="drop-down list"
      >
        {keys(cityList).map((city, key) => {
          if (city === "konum") {
            return (
              <option
                key={key}
                name={city}
                value={city}
                className="dropdown-list-item"
                selected
              >
                {_.startCase(city)}
              </option>
            );
          } else {
            return (
              <option
                key={key}
                name={city}
                value={city}
                className="dropdown-list-item"
              >
                {_.startCase(city)}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

export default ListDropDown;
