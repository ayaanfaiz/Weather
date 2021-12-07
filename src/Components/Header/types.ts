import { WeatherData } from "../PageWrapper/types";

export interface HeaderProps {
  selectedWeather?: WeatherData;
  city: string;
}