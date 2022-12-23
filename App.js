import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c21c34903ab37b62e2ce5936b078670d`

  const searchLoc = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    setLocation('')
    }
  }



  return (
    <div className='app'>

      <div className='search'>
        <input 
        value ={location}
        onChange = {event => setLocation(event.target.value)}
        onKeyPress = {searchLoc}
        placeholder = "Enter city name"
        type="text"/>
      </div>

      <div className='container'>

        <div className='top'>

          <div className='location'>
            <h2>{data.name}</h2>
          </div>

          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>

          <div className='conditions'>
            {data.weather ? <h5>{data.weather.main}</h5> : null}
          </div>

          <div className='hi-lo'>

            <div className='hi'>
              {data.main ? <h5>L: {data.main.temp_min.toFixed()}°F</h5> : null}
            </div>

            <div className='lo'>
            {data.main ? <h5>H: {data.main.temp_max.toFixed()}°F</h5> : null}
            </div>

          </div>

        </div>

        {data.name !== undefined && 

          <div className='bottom'>

            <div className='misc'>

              <div className='humidity'>
                <h5>Humidity</h5>
                {data.main ? <p>{data.main.humidity}%</p> : null}
              </div>

              <div className='wind'>
                <h5>Wind</h5>
                {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
              </div>

              <div className='feels'>
                <h5>Feels like</h5>
                {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              </div>

            </div>

          </div>

        }

      </div>

    </div>
  );
}

export default App;
