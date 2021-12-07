import React from "react";

// Types
import { HeaderProps } from "./types";

// Styles
import "./styles.css";

// Assets
import { ReactComponent as Cloud } from "../../assets/weather-cloud.svg";
import { ReactComponent as Sun } from "../../assets/weather-sun.svg";
import { ReactComponent as Rain } from "../../assets/rain.svg";

// Constants
import { monthNames } from "./constants";

const Header: React.FC<HeaderProps> = (props) => {
  const { selectedWeather, city } = props;
  const dateObject = new Date(selectedWeather?.time || "");
  const currentMonth = monthNames[dateObject.getMonth()];
  const currentDay = dateObject.toLocaleString("en-us", { weekday: "long" });
  const currentDate = dateObject.getDate();
  let weatherIcon = <Sun height="20.5rem" width="20.5rem" fill="#FFC700" />;
  if (selectedWeather?.weatherIconDesc.includes("cloud")) {
    weatherIcon = <Cloud height="20.5rem" width="20.5rem" />;
  } else if (selectedWeather?.weatherIconDesc.includes("rain")) {
    weatherIcon = <Rain height="20.5rem" width="20.5rem" fill='white' />;
  }
  return (
    <div className="header-wrapper">
      {weatherIcon}
      <div className="data-wrapper">
        <div className="weather-info">
          <div className="grey-text">
            <span>{selectedWeather?.weatherIconDesc}</span>
            <span>
              {selectedWeather?.highTemperature}° /{" "}
              {selectedWeather?.lowTemperature}°
            </span>
          </div>
          <div className="white-text">{selectedWeather?.temperature}°</div>
        </div>
        <div className='date-wrapper'>
          <div className="grey-text">{city}</div>
          <div className="date-text">
            <span>
            {currentDay}
            </span>
            <span>
            {currentDate}. {" "}
            {currentMonth && currentMonth.substr(0, 3)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
