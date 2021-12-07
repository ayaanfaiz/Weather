import React from "react";

// Types
import { WeatherData } from "../PageWrapper/types";

// Assets
import { ReactComponent as Cloud } from "../../assets/weather-cloud.svg";
import { ReactComponent as Sun } from "../../assets/weather-sun.svg";
import { ReactComponent as Rain } from "../../assets/rain.svg";

// Styles
import "./styles.css";

// Component that contains the weather card
const WeatherCard: React.FC<{
  cardDetails: WeatherData;
  onCardSelect: (cardData: WeatherData) => void;
}> = ({ cardDetails, onCardSelect }) => {
  // Converting the time stamp to date object.
  const currentDateObject = new Date(cardDetails.time);

  // Setting the weather icon based on the API data.
  let weatherIcon = <Sun height="7.5rem" width="7.5rem" fill="#FFC700" />;
  if (cardDetails?.weatherIconDesc.includes("cloud")) {
    weatherIcon = <Cloud height="7.5rem" width="7.5rem" />;
  } else if (cardDetails?.weatherIconDesc.includes("rain")) {
    weatherIcon = <Rain height="7.5rem" width="7.5rem" fill="white" />;
  }
  return (
    <div className="card" onClick={() => onCardSelect(cardDetails)}>
      <span className="grey-text">{currentDateObject.getHours()}:00</span>
      {weatherIcon}
      <span className="temperature-text">{cardDetails.temperature}°</span>
    </div>
  );
};

export default WeatherCard;
