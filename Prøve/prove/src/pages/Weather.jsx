import React, { useState, useEffect } from 'react'
import * as variables from '../../variables.json'


const Weather = () => {

  const apiKey = variables.APIKEY


  const [weatherdata, setWeatherData] = useState({
    cityName: '',
    Weather: '',
    weatherDescription: '',
    temprature: '',
    feelsLike: '',
    foundCity: false,
  })

  const [countryCode, setCountryCode] = useState('')

  const [currentCity, setCurrentCity] = useState('')


  function getWeatherInCity() {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity},${countryCode}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {

        console.log(data)

        if (data.cod === "404") {
          setWeatherData({ ...weatherdata, foundCity: false })
        } else {

          const weatherCast = {
            foundCity: true,
            temprature: data.main.temp,
            feelsLike: data.main.temp,
            cityName: data.name,
            Weather: data.weather[0].main,
            weatherDescription: data.weather[0].description
          }

          setWeatherData(weatherCast)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className='weather-page'>
      <h1 className='weather-title'>Weather data</h1>
      <p className='weather-undertitle'>Select a country to start checking the weather!</p>
      <div className='buttondiv'>
        <button onClick={() => setCountryCode('NO')}>Norway</button>
        <button onClick={() => setCountryCode('SE')}>Sweeden</button>
        <button onClick={() => setCountryCode('FIN')}>Finland</button>
        <button onClick={() => setCountryCode('DNK')}>Denmark</button>
        <button onClick={() => setCountryCode('ISL')}>Iceland</button>
      </div>
      <input type="text" onChange={(e) => setCurrentCity(e.target.value)} /> <button onClick={getWeatherInCity}>Get Weather</button>
      <div>
        <p>Currently selected {countryCode}</p>
        {!weatherdata.foundCity ? <p>No city found</p> : (
          <div>
            <h1>Current weather in {weatherdata.cityName}</h1>
            <p>Temprature: {weatherdata.temprature}°C, Feels like: {weatherdata.feelsLike}°C</p>
            <p>Weather: {weatherdata.Weather}</p>
            <p>weatherdescription: {weatherdata.weatherDescription}</p>
          </div>

        )}
      </div>
    </div>
  )
}

export default Weather