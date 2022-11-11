import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Date from "./Date";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(" ");

 
  

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `907fef83425ee6575ce345a2f87d8989`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <button type="Submit">Search</button>
      <button type="Submit">Current</button>
    </form>
  );

  if (loaded) {
    return (
    <div className="Weather">
        {form}
        <h1>{city}</h1>
        <Date />
        <p>{weather.description}</p>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weather.icon} alt={weather.description}
              className="float-left"
            />
            <div className="float-left">
            <strong className="weather-temperature">{Math.round(weather.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div> 
        <div className="col-6">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {Math.round(weather.wind)}km/h</p>
        </div> 
  </div>
  <div class="d-flex justify-content-evenly">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wen</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      
    </div>
  </div>
    );
  } else {
    return(
    <div className="Weather">
      {form}
      <h1>Kyiv</h1>
        <Date />
        <p>{weather.description}</p>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weather.icon} alt={weather.description}
              className="float-left"
            />
            <div className="float-left">
            <strong className="weather-temperature">{Math.round(weather.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div> 
        <div className="col-6">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {Math.round(weather.wind)}km/h</p>
        </div> 
  </div>
  <div class="d-flex justify-content-evenly">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wen</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
     </div>
  </div>
    );
  }
}
