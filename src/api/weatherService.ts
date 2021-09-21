import axios from 'axios'

export const getSuggestedPlaces = async (query: string) => {
  return await axios.get(
    `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}`
  )
}
export const getWeatherForecast = async (query: string) => {
  return await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}&days=3`
  )
}
// https://api.weatherapi.com/v1/current.json?key=ac6a35ef289843838c3112303212308&q=BIla&aqi=no
