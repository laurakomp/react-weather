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
          <ul>
            <WeatherTemperature celsius={props.data.temperature} />

            <li>
              <div className="description">{props.data.description}</div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div classname="icon">
            <WeatherIcon code={props.data.icon} height={50} />
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
