import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = (country) => {
    const [weather, setWeather] = useState([])

    const hook = () => {
        axios
            .get('http://api.weatherstack.com/current', {
                params: {
                  access_key : api_key,
                  query : country.country.capital,
                  units : 'm'  
                }
            })
            .then(response => {
                console.log('Weather data recieved')
                setWeather(response.data.current)
            })
    }

    useEffect(hook,[])

    return (
        <div>
            <h2>Weather in {country.country.capital}</h2>
            <img src={weather.weather_icons} alt=""></img>
            <p>Temp: {weather.temperature}°C</p>
            <p>{weather.weather_descriptions}</p>
        </div>
    )
}

export default Weather