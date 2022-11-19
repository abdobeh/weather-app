import React from "react";
import "./CurrentWeather.scss";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
        <div className="center">
          <h2>{data.city}</h2>
        </div>
      <div className="center">
        <div className="card">
          <div className="left">
            <h1>{Math.round(data.main.temp)}°C</h1>
          </div>
          <div className="right">
            <p className="description">{data.weather[0].description}</p>
          </div>
        </div>
        <div className="flex">
            <p className="description">Details</p>
        </div>
      </div>
      <div className="Bcard">
        <div className="bottom">
            <p className="label">Feels Like</p>

            <p className="value">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="bottom">
            <p className="label">Wind</p>

            <p className="value">{data.wind.speed} m/s</p>
        </div>
        <div className="bottom">
            <p className="label">Humidity</p>

            <p className="value">{data.main.humidity}<span>%</span></p>
        </div>
        <div className="bottom">
            <p className="label">Pressure</p>

            <p className="value">{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
