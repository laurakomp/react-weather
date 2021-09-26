import React from "react";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": "/icons/clear-day.svg",
    "01n": "/icons/clear-night.svg",
    "02d": "/icons/partly-cloudy-day.svg",
    "02n": "/icons/partly-cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/overcast-day.svg",
    "04n": "/icons/bovercast-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain.svg",
    "10d": "/icons/partly-cloudy-day-rain.svg",
    "10n": "/icons/partly-cloudy-night-rain.svg",
    "11d": "/icons/thunderstorms-day.svg",
    "11n": "/icons/thunderstorms-night.svg",
    "13d": "/icons/snow.svg",
    "13n": "/icons/snow.svg",
    "50d": "/icons/fog-day.svg",
    "50n": "/icons/fog-night.svg",
  };
  return <img src={codeMapping[code]} alt={alt} className="weatherIcon" />;
}
