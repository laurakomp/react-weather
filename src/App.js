import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tallinn" />
        <footer>
          This project was coded by Laura Komp and is{" "}
          <a
            href="https://github.com/laurakomp/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          and{" "}
          <a
            href="https://brave-murdock-e59f5f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
