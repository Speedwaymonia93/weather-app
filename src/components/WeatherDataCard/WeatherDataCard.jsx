import React from "react";
import "../WeatherDataCard/WeatherDataCard.css";
import { PiThermometer } from "react-icons/pi";
import { MdOutlineDescription } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { useAPI } from "../../services/ApiContext";
import { FcCalendar } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";

const WeatherDataCard = ({ weatherData }) => {
  const { isToggled } = useAPI();
  const date = new Date();

  return (
    <div className="app-container">
      <div>
        <div className="date-container">
          <h2 className="title">{weatherData.name}</h2>
          <img
            alt="icon"
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            width="120"
            height="100"
          />
        </div>

        <div className="date-container">
          <FcCalendar className="icon" />
          <div>
            <h3 className="sub-title">Current date</h3>
            <p>{date.toDateString()}</p>
          </div>
        </div>
      </div>

      <div className="date-container">
        <FcViewDetails className="icon" />
        <h3 className="sub-title">Weather Details </h3>
      </div>

      <div className="data-container">
        <div className="card-container">
          <PiThermometer className="icon" />
          <div className="details-container">
            <p className="text">Temperature: </p>
            <p className="detail">
              {isToggled
                ? ((weatherData.main.temp * 9) / 5 + 32 ).toFixed(2)+ "F"
                : weatherData.main.temp + "°C"}{" "}
            </p>
          </div>
        </div>
        <div className="card-container">
          <MdOutlineDescription className="icon" />
          <div className="details-container">
            <p className="text">Description:</p>
            <p className="detail">{weatherData.weather[0].description}</p>
          </div>
        </div>

        <div className="card-container">
          <TbTemperature className="icon" />
          <div className="details-container">
            <p className="text">Feels like: </p>
            <p className="detail">
              {isToggled
                ? ((weatherData.main.feels_like * 9) / 5 + 32).toFixed(2) + "F"
                : weatherData.main.feels_like + "°C"}{" "}
            </p>
          </div>
        </div>
        <div className="card-container">
          <WiHumidity className="icon" />
          <div className="details-container">
            <p className="text">Humidity: </p>
            <p className="detail">{weatherData.main.humidity}%</p>
          </div>
        </div>

        <div className="card-container">
          <WiBarometer className="icon" />
          <div className="details-container">
            <p className="text">Pressure: </p>
            <p className="detail">{weatherData.main.pressure}hPa</p>
          </div>
        </div>
        <div className="card-container">
          <FaWind className="icon" />
          <div className="details-container">
            <p className="text">Wind Speed: </p>
            <p className="detail">{weatherData.wind.speed}m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDataCard;
