import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7357fb45a8cfdf15b12c10e960b407d8`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input
        value = {location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
      <div className="container">

        <div className="top">
          <p>{data.name}</p>
        </div>

        <div className="temp">
          {data.main ? <h1>{Math.round(data.main.temp - 273.15)}°C</h1> : null}
        </div>

        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{Math.round(data.main.feels_like - 273.15)}°C</p> : null}
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            {data.main ? <p>{data.main.humidity}% </p> : null }
            <p>Humidity</p>
          </div>

          <div className="wind">
            {data.wind ? <p> {data.wind.speed} </p> : null }
            <p>Wind Speed</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
