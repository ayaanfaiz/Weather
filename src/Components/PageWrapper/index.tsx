import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

// Components
import Header from "../Header";

// Types
import { WeatherData } from "./types";

// Utils
import { segregateWeatherData } from "./utils";
import WeatherList from "../WeatherList";

// Assets
import { ReactComponent as Loader } from "../../assets/loader.svg";

// Styles
import './styles.css'

const PageWrapper: React.FC = () => {
  const [weatherData, setWeatherData] = useState<Array<WeatherData>>();
  const [city, setCity] = useState<string>("");
  const [selectedWeather, setSelectedWeather] = useState<WeatherData>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/data/2.5/forecast", {
        params: {
          q: "München,DE",
          appid: "b6907d289e10d714a6e88b30761fae22",
        },
      })
      .then((responseData) => {
        setLoading(false);
        setCity(responseData?.data?.city?.name || "");
        const formattedWeatherData = segregateWeatherData(
          responseData?.data?.list
        );
        setWeatherData(formattedWeatherData);
        formattedWeatherData.length &&
          setSelectedWeather(formattedWeatherData[0]);
      });
  }, []);

  const onCardSelect = useCallback((cardData: WeatherData) => {
    setSelectedWeather(cardData);
  }, []);

  return (
    <>
      {loading ? 
      <div className='loader'>
      <Loader height='80px' width='80px'/>
      </div> : (
        <>
          <Header selectedWeather={selectedWeather} city={city} />
          <WeatherList weatherList={weatherData} onCardSelect={onCardSelect} />
        </>
      )}
    </>
  );
};

export default PageWrapper;
