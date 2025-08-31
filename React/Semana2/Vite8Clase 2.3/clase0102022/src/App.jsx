import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [object, setObject] = useState()

  let lon, lat

  const getLatLong = () => {

    const success = pos => {
      console.log(pos.coords);
      lon = pos.coords.longitude;
      lat = pos.coords.latitude
      setObject({lon, lat})
    }

    navigator.geolocation.getCurrentPosition(success)
  }

  const API_KEY = '5de68c20a454e0f7b0552e106b624d2e';

  useEffect(() => {
    if(object !== undefined){

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${object?.lat}&lon=${object?.lon}&appid=${API_KEY}`
    axios.get(url)
      .then(res => console.log('Respuesta de la API',res.data))

  }
  }, [object])
  

  return (
    <div className="App">
      <button onClick={getLatLong}>GetLocation</button>
    </div>
  )
}

export default App
