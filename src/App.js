import "./App.css";
import Container from "./components/Container";
import { WeatherDataProvider } from "./context/WeatherDataContext";

function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Container></Container>
      </WeatherDataProvider>
    </div>
  );
}

export default App;
