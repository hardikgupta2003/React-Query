import React from 'react';
import { useQuery } from 'react-query';
import { fetchWeather } from '../api/WeatherApi';


const WeatherApp = () => {
  const { isLoading, isError, data } = useQuery('weather', () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
            console.log("Position: ",position)
          const { latitude, longitude } = position.coords;
          console.log("latitude: ",latitude)
          console.log("longitude: ",longitude)
          resolve(fetchWeather(latitude, longitude));
        },
        error => reject(error)
      );
    });
  });

  if (isLoading) return <div className=''>Loading...</div>;
  if (isError) return <div>Error fetching weather data</div>;

  const { name, weather, main } = data;

  return (
    <div className="weather-container">
      <h1>Current Weather in : {name}</h1>
      <div className="weather-info">
        <div className="weather-description">
          <p>{weather[0].main}</p>
          <p>{weather[0].description}</p>
        </div>
        <div className="temperature">
          <p>Temperature: {main.temp}°C</p>
          <p>Feels like: {main.feels_like}°C</p>
          <p>humidity: {main.humidity}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
