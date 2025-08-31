import { useEffect, useState } from 'react'
import axios from 'axios'

const useWeather = () => {

    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect (() => {
      const success = pos => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        setCoords({lat, lon})
  
      }
      navigator.geolocation.getCurrentPosition(success)
  
    }, [])
  
    useEffect(() => {
  
      if(coords !== undefined){
        const API_KEY = '5de68c20a454e0f7b0552e106b624d2e'
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
        axios.get(URL)
        .then(res => {        
          setWeather(res.data)
          setIsLoading(false)
        }) 
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
      }
  
    }, [coords])

  return {weather, isLoading}
}

export default useWeather