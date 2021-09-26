import React from "react";
import FormattedDate from "./FormattedDate";

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
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </li>
            <li>
              <div className="description">{props.data.description}</div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img src={props.data.iconUrl} alt={props.data.description} />
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
