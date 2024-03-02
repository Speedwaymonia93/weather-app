import "./HomePage.css";
import React from "react";
import { useAPI } from "../../services/ApiContext";
import TopBar from "../TopBar/TopBar";
import Error from "../Error/Error";
import WeatherDataCard from "../WeatherDataCard/WeatherDataCard";
import ToggleButton from "../ToggleButton/ToggleButton";
import weather_image from "../../Assets/weather-app.png"
const WeatherApp = () => {
  const { weatherData, errMsg, isErr } = useAPI();
  
  return (
    <div className="container">
      <div className="heading-container">
        <img src={weather_image} alt="weather" />
        <h1 className="heading">Weather App</h1>
      </div>
      <TopBar />
      <ToggleButton/>
      { weatherData && !isErr && (
        <WeatherDataCard weatherData={ weatherData } />
      ) }
      
      {isErr && <Error errMsg={errMsg}/> }
    </div>
  );
};

export default WeatherApp;
