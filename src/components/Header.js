import React from "react";
import cities from "../context/cities.json";

import { useCity } from "../context/CityContext";
const Header = () => {
  const { city, setCity } = useCity();

  const handleChangeCity = (e) => {
    setCity(e);
  };

  return (
    <>
      <div className="header-container">
        <select
          onChange={(e) => handleChangeCity(JSON.parse(e.target.value))}
          value={city.name}
        >
          <option value={JSON.stringify(city)} key={city.id} name={city.name}>
            {city.name}
          </option>
          {cities.map((city) => (
            <option value={JSON.stringify(city)} key={city.id} name={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Header;
