import React, { useEffect, useState } from 'react'
import FreeSolo from '@components/input'
import SampleCard from '@components/sampleCard'
import { getWeatherForecast } from 'src/api/weatherService'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'

interface Forecast {
  date_epoch: number
  date: string
  day: {
    condition: {
      text: string
      icon: string
    }
    avgtemp_c: string
  }
}
const Home: React.FC = () => {
  const [place, setPlace] = useState('')
  const [forecast, setForecast] = useState<Forecast[]>([])
  const getWeather = async () => {
    if (place) {
      const weather = await getWeatherForecast(place)
      setForecast(weather.data.forecast.forecastday)
      //console.log('weather %o', weather)
    }
  }
  console.log('forecast %o', forecast)
  useEffect(() => {
    getWeather()
  }, [place])
  return (
    <div>
      <Container maxWidth="md">
        <Grid container direction="row" justifyContent="center">
          <Grid container>
            <FreeSolo setPlace={setPlace} />
          </Grid>
        </Grid>{' '}
        <h1>{place || 'No selected location'}</h1>
        {forecast.length && place ? (
          <Grid container spacing={3}>
            {forecast.map((item) => {
              return (
                <Grid item xs key={item.date_epoch}>
                  <SampleCard
                    date={item.date}
                    condition={item.day.condition.text}
                    img={`https:${item.day.condition.icon}`}
                    temp={item.day.avgtemp_c}
                  />
                </Grid>
              )
            })}
          </Grid>
        ) : null}
      </Container>
    </div>
  )
}
export default Home
