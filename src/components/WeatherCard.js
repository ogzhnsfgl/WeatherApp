import { useWeatherData } from "../context/WeatherDataContext";

const WeatherCard = () => {
  const { weatherData } = useWeatherData();

  const days = (key) => {
    var date = new Date();
    var today = date.getDay();
    let days = [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
      "Bugün",
      "Yarın",
    ];
    switch (key) {
      case 1:
        return days[7];
      case 2:
        return days[8];
      case 3:
        return days[[today] % 7];
      case 4:
        return days[[today + 1] % 7];
      case 5:
        return days[[today + 2] % 7];
      case 6:
        return days[[today + 3] % 7];
      case 7:
        return days[[today + 4] % 7];
      default:
        return days[[today + 5] % 7];
    }
  };

  return (
    <div className="card-container">
      {weatherData.length !== undefined &&
        weatherData.map((day, key) => (
          <div key={key} className="card-item">
            <div className="card-title">{days(key + 1)}</div>
            <div className={`card-image`}>
              {/* <i className="fas fa-sun"></i> */}
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="ico"
              />
            </div>

            <div className="card-details">
              <span className="temp-day">
                <p className="current">{day.weather[0].main}</p>
                {day.temp.day}
              </span>

              <span className="temp-max-min">
                <p className="max">Max</p>
                {day.temp.max}
              </span>
              <span className="temp-max-min">
                <p className="max">Min</p>
                {day.temp.min}
              </span>
            </div>
          </div>
        ))}

      {/* <p>{JSON.stringify(weatherData)}</p> */}
    </div>
  );
};

export default WeatherCard;
