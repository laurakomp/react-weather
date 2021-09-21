import React from "react";
import "./Weather.css";
import logo from "./01d.png";

export default function Weather() {
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
      <h1>Tallinn</h1>
      <ul>
        <li>Monday </li>
        <li>07:00</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Sunny"
          />
          <span className="temperature">10</span>

          <span className="unit">C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Clear sky </li>
            <li>Percipitation: 15%</li>
            <li>humidity: 80%</li>
            <li>wind: 5m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
