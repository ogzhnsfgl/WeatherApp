import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [city, setCity] = useState({
    id: 1,
    name: "Adana",
    latitude: "37.0000",
    longitude: "35.3213",
    population: 2183167,
    region: "Akdeniz",
  });

  const values = { city, setCity };

  return (
    <CityContext.Provider value={values}> {children} </CityContext.Provider>
  );
};

const useCity = () => useContext(CityContext);

export { CityProvider, useCity };
