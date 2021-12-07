import React from "react";
import WeatherCard from "../WeatherCard";

// Types
import { WeatherListProps } from "./types";

// Styles
import "./styles.css";

// Wrapper Component to render the list of weather data
const WeatherList: React.FC<WeatherListProps> = (props) => {
  const { weatherList, onCardSelect } = props;
  return (
    <div className="weather-list-wrapper">
      {weatherList?.map((cardDetail, i) => {
        return (
          <WeatherCard
            cardDetails={cardDetail}
            onCardSelect={onCardSelect}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default WeatherList;
