import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders header", () => {
  // render the component
  render(<Header city="Munich" />);
  const linkElement = screen.getByText(/Munich/i);
  expect(linkElement).toBeInTheDocument();
});

test("Render Header with weather data", () => {
  const weatherData = {
    temperature: 10,
    highTemperature: 10,
    lowTemperature: 10,
    time: 10,
    weatherIconDesc: "Clear Sky",
  };
  render(<Header city="Berlin" selectedWeather={weatherData} />);
  const weatherElement = screen.getByText("Clear Sky");
  expect(weatherElement).toBeInTheDocument();
});
