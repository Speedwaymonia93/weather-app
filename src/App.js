import "./App.css";
import WeatherApp from "./components/HomePage/HomePage";
import { APIContextProvider } from "./services/ApiContext";
function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <WeatherApp />
      </div>
    </APIContextProvider>
  );
}

export default App;
