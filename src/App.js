import { useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./styles.scss";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <div className="blurR"></div>
      <div className="blurL"></div>
      <div className="blurC"></div>
      <div className="content">
        <div className="form">
          <div className="name">ABD | Weather App</div>

          <div className="search">
            <Search onSearchChange={handleOnSearchChange} />
          </div>
          <div className="current">
            {currentWeather && <CurrentWeather data={currentWeather} />}
          </div>
        </div>

        <div className="info">
          <ul className="navbar">
            {!forecast ? (
              <li className="item">Undefined</li>
            ) : (
              <li className="item">Forecast</li>
            )}
            <li className="item">Alert</li>
            <li className="item">Map</li>
            <li className="item">Satellite</li>
            <li className="item">News</li>
          </ul>
          {!forecast ? <h1>The magic only starts after you <span>select a city</span></h1> : <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
