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
import "./styles.css";

// Main Component that manages all other components
const PageWrapper: React.FC = () => {
  // State to save all the weather data from the API
  const [weatherData, setWeatherData] = useState<Array<WeatherData>>();
  // State to set the Current City - From API
  const [city, setCity] = useState<string>("");

  // Currently selected weather
  const [selectedWeather, setSelectedWeather] = useState<WeatherData>();

  // Loader state
  const [loading, setLoading] = useState<boolean>(false);

  // API error
  const [apiFailed, setApiFailed] = useState<boolean>(false);

  useEffect(() => {
    // Setting the loading to true to show the loader on the page
    setLoading(true);
    axios
      .get("/data/2.5/forecast", {
        params: {
          q: "München,DE",
          appid: "b6907d289e10d714a6e88b30761fae22",
        },
      })
      .then((responseData) => {
        // Setting the loading to false to hide the loader on the page
        setLoading(false);
        setCity(responseData?.data?.city?.name || "");
        const formattedWeatherData = segregateWeatherData(
          responseData?.data?.list
        );
        setWeatherData(formattedWeatherData);
        formattedWeatherData.length &&
          setSelectedWeather(formattedWeatherData[0]);
      })
      .catch(() => {
        // Setting the API error to show failed state
        setApiFailed(true);
        setLoading(false);
      });
  }, []);

  // Callback that handles the currently selected weather data
  const onCardSelect = useCallback((cardData: WeatherData) => {
    setSelectedWeather(cardData);
  }, []);

  return (
    <>
      {apiFailed ? (
        <div className="failed">
          Failed to get data. Please refresh the page
        </div>
      ) : (
        <>
          {loading ? (
            <div className="loader">
              <Loader height="80px" width="80px" />
            </div>
          ) : (
            <>
              <Header selectedWeather={selectedWeather} city={city} />
              <WeatherList
                weatherList={weatherData}
                onCardSelect={onCardSelect}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default PageWrapper;
