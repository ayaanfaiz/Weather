import { WeatherData } from "../PageWrapper/types";

export interface WeatherListProps {
  weatherList?: Array<WeatherData>;
  onCardSelect: (cardData: WeatherData) => void;
}
