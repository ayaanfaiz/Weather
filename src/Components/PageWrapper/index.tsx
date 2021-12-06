import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Header from '../Header';

// Types
import { WeatherData } from './types';

// Utils
import { segregateWeatherData } from './utils'; 

const PageWrapper: React.FC = () => {
  const [weatherData, setWeatherData] = useState<Array<WeatherData>>();
  const [city, setCity] = useState<string>('');
  const [selectedWeather, setSelectedWeather] = useState<WeatherData>();

  useEffect(() => {
    axios.get('/data/2.5/forecast', {
      params: {
        q: 'München,DE',
        appid: 'b6907d289e10d714a6e88b30761fae22',
      }
    }).then((responseData) => {
      setCity(responseData?.data?.city?.name || '');
      const formattedWeatherData = segregateWeatherData(responseData?.data?.list)
      setWeatherData(formattedWeatherData);
      formattedWeatherData.length && setSelectedWeather(formattedWeatherData[0]);
    })
  }, []);

  return (
    <>
    <Header selectedWeather={selectedWeather} city={city}/>
    </>
  );
}

export default PageWrapper;