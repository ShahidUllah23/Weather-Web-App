import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [loc, setLoc] = useState(" ");
  const myApiKey = "d24c9d2c9a098c2b0bce24de6730b034";
  // const latt = 33.59733;
  // const long = 73.0479;
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${myApiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(apiCall).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLoc(" ");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={loc}
          onChange={(event) => setLoc(event.target.value)}
          placeholder="Enter Your Location"
          onKeyDown={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like} °F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity </p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH </p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default App;
