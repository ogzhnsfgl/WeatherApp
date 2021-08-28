import { useEffect, useState } from "react";
import { useCity } from "../context/CityContext";

const Geolocation = () => {
  const { setCity } = useCity();

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lon: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
    setCity({
      id: 99,
      name: "Konumunuz",
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      population: 0,
      region: "NaN",
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: false,
      error,
    });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported!",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};

export default Geolocation;
