import { WeatherData } from "./types";

// Util to segregate the weather data
export const segregateWeatherData = (
  weatherData: Array<any>
): Array<WeatherData> => {
  const finalData: Array<WeatherData> = weatherData.map((currentWeather) => {
    const {
      dt,
      weather,
      main: {
        temp: temperature,
        temp_max: highTemperature,
        temp_min: lowTemperature,
      },
    } = currentWeather;
    // Getting the description of the weather
    const weatherIconDesc = weather[0]?.description || "";
    return {
      temperature: Math.round(temperature - 273),
      highTemperature: Math.round(highTemperature - 273),
      lowTemperature: Math.round(lowTemperature - 273),
      time: dt * 1000,
      weatherIconDesc,
    };
  });
  return finalData;
};
