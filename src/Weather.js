import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import image from "./01d.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      daate: "Wednesday 08:00",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Monday </li>
          <li>07:00</li>
        </ul>
        <div className="row mt-3">
          <div className="col-4">
            <ul>
              <li>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </li>
              <li>
                <div className="description">{weatherData.description}</div>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>

          <div className="col-4">
            <ul>
              <li>humidity: {weatherData.humidity}%</li>
              <li>wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=ebde765ff48c731ae66ed15747f18ce4&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
