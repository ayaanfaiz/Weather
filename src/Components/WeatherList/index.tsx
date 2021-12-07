import React from "react";
import WeatherCard from "../WeatherCard";

// Types
import { WeatherListProps } from "./types";

// Styles
import "./styles.css";

const WeatherList: React.FC<WeatherListProps> = (props) => {
  const { weatherList, onCardSelect } = props;
  return (
    <div className='weather-list-wrapper' >
      {weatherList?.map((cardDetail) => {
        return <WeatherCard cardDetails={cardDetail} onCardSelect={onCardSelect}/>;
      })}
    </div>
  );
};

export default WeatherList;
