import React from "react";

const WeatherCard = (props) => {
  const { weather, dt, temp } = props.data;
  const { main, description, icon } = weather[0];
  const { day, min, max } = temp;
  const date = new Date(dt * 1000);
  const weekday = date.toLocaleString("en-EN", { weekday: "long" });
  const dateLocale = date.toLocaleString("en-EN", { dateStyle: "long" });
  const dateNow = new Date().toLocaleString("en-EN", { dateStyle: "long" });
  console.log(dateLocale);
  console.log(dateNow);

  return (
    <div className={`weather-card weather-card-${parseInt(props.index) + 1}`}>
      <div className="card-image">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="card-date">
        <p>{dateLocale}</p>
        <p>{weekday}</p>
      </div>
      <div className="card-temp">
        <p>Current: {day.toFixed(1)}</p>
        <p>Min: {min.toFixed(1)}</p>
        <p>Max: {max.toFixed(1)}</p>
      </div>
      <div className="card-description">
        <span>{description}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
