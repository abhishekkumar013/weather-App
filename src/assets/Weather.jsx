import { useState } from 'react'
import './Weather.css'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PageviewIcon from '@mui/icons-material/Pageview'
import InfoBox from './InfoBox'

export default function Weather() {
  let [searchData, setSearchData] = useState('')
  let [weatherData, setWeatherData] = useState({
    FeelLike: 'No Data',
    Humidity: 'No Data',
    Temp: 'No Data',
  })

  let handlChange = (event) => {
    setSearchData(event.target.value)
  }
  let GetData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=0d688fef6aaf69ea6d7cd6acb069b796`
    let response = await fetch(url)
    let jasonresponse = await response.json()
    setWeatherData(() => {
      return {
        Name: jasonresponse.name,
        FeelLike: jasonresponse.main.feels_like,
        Humidity: jasonresponse.main.humidity,
        Temp: jasonresponse.main.temp,
        Description: jasonresponse.weather[0].description,
      }
    })
  }

  let handleSubmit = async (event) => {
    event.preventDefault()
    GetData()
    setSearchData('')
  }

  return (
    <div className="searchbox">
      <h3>Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={searchData}
          onChange={handlChange}
          required
        />
        <br></br> <br></br>
        <Button variant="contained" endIcon={<PageviewIcon />} type="submit">
          Search
        </Button>
        <br></br> <br></br>
        <InfoBox weatherData={weatherData} city={searchData} />
      </form>
    </div>
  )
}
