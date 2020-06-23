import React, { useState, useEffect } from 'react'
// import moment from 'moment'
import dayjs from 'dayjs'
import { openWeatherApiKey } from '../apiKeys'

export const WeatherComp = () => {
  // const cityWeather = document.getElementById("city");
  // API KEY AND LINK:
  const weatherOneDayApi = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&units=metric&APPID=${openWeatherApiKey}&lang=en`
  // const weatherForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&APPID=${openWeatherApiKey}&lang=en`;

  const [weatherDay, setweatherDay] = useState([])

  // First API - day weather
  useEffect(() => {
    fetch(weatherOneDayApi)
      .then((res) => res.json())
      .then((json) => setweatherDay(json))
  }, [weatherOneDayApi])
  console.log('check weatherday', weatherDay)

  return (
    <div>
      <h2>Weather Info</h2>
      <article className="kit-card">
        <p>Vädret idag i:</p>
        <h4>{weatherDay.name}</h4>

        <h4>{weatherDay.timezone}</h4>
        <h4>{dayjs.unix(weatherDay.dt).format('YYYY-MM-DD kl: hh:mm')}</h4>
      </article>

    </div>
  )
}
