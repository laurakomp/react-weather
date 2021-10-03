import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-4">
          <div className="Today-temp">
            <ul>
              <WeatherTemperature celsius={props.data.temperature} />

              <li>
                <div className="description">{props.data.description}</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div classname="icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>

        <div className="col-4 Today-info">
          <ul>
            <li>feels like: {Math.round(props.data.feelslike)} °C</li>
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {Math.round(props.data.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
