import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Denver");
  const api_key = process.env.REACT_APP_API_KEY;
  const [errMsg, setErrMsg] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      );
      setWeatherData(response.data);
      setIsErr(false);
      setErrMsg("");
    } catch (error) {
      setErrMsg(error.response.data.message);
      setIsErr(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        weatherData,
        errMsg,
        setErrMsg,
        isErr,
        setIsErr,
        setCity,
        fetchData,
        isToggled,
        setIsToggled,
      }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
