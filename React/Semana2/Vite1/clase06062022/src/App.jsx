import './App.css'
import CardsWeather from './component/CardsWeather'
import Loader from './component/Loader'
import CardCounter from './component/CardCounter'
import useWeather from './hooks/useWeather'

function App() {

  const {weather, isLoading} = useWeather()

  return (
    <div className="App">
      {
        isLoading ?
        <Loader />
        :
        <CardsWeather weather={weather}/>
      }
    </div>
  )
}

export default App
