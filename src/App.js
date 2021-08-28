import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import { WeatherProvider } from "./context/WeatherContext";
import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <h1 className="banner">Weather APP</h1>
          <WeatherContainer />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
