import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Laura Komp and is{" "}
          <a href="https://github.com/laurakomp/react-weather" target="_blank">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
