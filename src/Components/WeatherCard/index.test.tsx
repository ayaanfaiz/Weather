import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./index";

test("renders header", () => {
  const weatherData = {
    temperature: 10,
    highTemperature: 10,
    lowTemperature: 10,
    time: 1487257200,
    weatherIconDesc: "Clear Sky",
  };
  // render the component
  render(
    <WeatherCard
      cardDetails={weatherData}
      onCardSelect={() => console.log("On card select")}
    />
  );
  const linkElement = screen.getByText("10°");
  expect(linkElement).toBeInTheDocument();
});
