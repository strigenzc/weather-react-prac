import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  <h2>Weather Search</h2>;
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeatherData] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7bcf0da6ca80b20c501d86d32cc003a7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a City" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{city}</h2>
        <ul>
          <li>
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
          <li> Temperature: {Math.round(weather.temperature)} degrees </li>
          <li> Humidity: {weather.humidity} % </li>
          <li> Wind Speed: {weather.windSpeed} km/hr </li>
          <li> {weather.description} </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
