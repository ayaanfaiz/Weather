import { WeatherData } from "../PageWrapper/types";

export interface HeaderProps {
  selectedWeather: WeatherData | undefined;
  city: string;
}