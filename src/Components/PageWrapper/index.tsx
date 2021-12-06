import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Header from '../Header';
//q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22
const PageWrapper: React.FC = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios.get('/data/2.5/forecast', {
      params: {
        q: 'M%C3%BCnchen,DE',
        appid: 'b6907d289e10d714a6e88b30761fae22'
      }
    }).then((responseData) => {
      console.log(responseData);
    })
  }, []);

  return (
    <Header />
  );
}

export default PageWrapper;