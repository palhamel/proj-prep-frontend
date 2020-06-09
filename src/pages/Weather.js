import React, { useState, useEffect } from "react";
// import WeatherComp from '../components/WeatherComp'
// import moment from 'moment'

import { openWeatherApiKey } from "../apiKeys";

export const Weather = () => {
  // const cityWeather = document.getElementById("city");
  // API KEY AND LINK:
  const weatherOneDayApi = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&units=metric&APPID=${openWeatherApiKey}&lang=en`;
  // const weatherForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&APPID=${openWeatherApiKey}&lang=en`;

  const [weatherDay, setweatherDay] = useState([]);

  // First API - day weather
  useEffect(() => {
    fetch(weatherOneDayApi)
      .then((res) => res.json())
      .then((json) => setweatherDay(json));
  }, [weatherOneDayApi]);
  console.log(weatherDay);

  return (
    <div>
      <h2>Weather Page</h2>
      <article className="kit-card">
        <p>Vädret idag i:</p>
        <h4>{weatherDay.name}</h4>
        <h4>{weatherDay.timezone}</h4>
        <h4>{weatherDay.dt}</h4>
      </article>
    </div>
  );
};

/*
    console.log("checking first json", json); // checking the json from open weather
      console.log("city:", json.name)
      console.log("temp:", json.main.temp)
      console.log("wind:", json.wind)
    */

/*
  return (
    <div>
      <h2>Weather Page</h2>
      <article className="kit-card" >
        <p>Vädret idag i:</p>
        <h3>{weatherDay.name}</h3>
        <h3>{weatherDay.timezone}</h3>

      </article>
    </div>
  );
}

*/
