import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.scss";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="Container">
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily">
                    <div className="item">
                      <label className="day">{forecastDays[idx]}</label>
                      <div>
                        <label className="description">
                          {item.weather[0].description}
                        </label>
                      </div>
                    </div>
                    <div className="describe">
                      <label className="min-max">
                        {Math.round(item.main.temp)}°C
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="details">
                  <div className="item">
                    <label className="label">Pressure: </label>
                    <label className="value">{item.main.pressure} hPa</label>
                  </div>
                  <div className="item">
                    <label className="label">Humidity: </label>
                    <label className="value">
                      {item.main.humidity}
                      <span>%</span>
                    </label>
                  </div>
                  <div className="item">
                    <label className="label">Clouds: </label>
                    <label className="value">
                      {item.clouds.all}
                      <span>%</span>
                    </label>
                  </div>
                  <div className="item">
                    <label className="label">Wind speed: </label>
                    <label className="value">{item.wind.speed} m/s</label>
                  </div>
                  <div className="item">
                    <label className="label">Sea level: </label>
                    <label className="value">{item.main.sea_level} m</label>
                  </div>
                  <div className="item">
                    <label className="label">Feels like: </label>
                    <label className="value">{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
