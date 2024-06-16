import './infoBox.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'

export default function InfoBox({ weatherData, city }) {
  const INIT_URL =
    'https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D'
  const Cold_URL =
    'https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D'
  const Hot_URL =
    'https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D'
  const Rainy_URL =
    'https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww'

  return (
    <div className="InfoBpx">
      <h2>Weather Info: {weatherData.Description}</h2>
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherData.Humidity > 80
                ? Rainy_URL
                : weatherData.Temp - 273.15 > 20
                ? Hot_URL
                : Cold_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.Name}
              {weatherData.Humidity > 80 ? (
                <ThunderstormIcon />
              ) : weatherData.Temp - 273.15 > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={'span'}
            >
              <p>Temprature: {Math.floor(weatherData.Temp - 273.15)} &deg;C</p>
              <p>
                Feel Like: {Math.floor(weatherData.FeelLike - 273.15)} &deg;C
              </p>
              <p>Humidity: {weatherData.Humidity}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
