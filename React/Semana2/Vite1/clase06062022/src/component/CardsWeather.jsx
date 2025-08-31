import React from 'react'

const CardsWeather = ({weather}) => {
  return (
    <div className='Card'>
        <h1>{weather?.name}</h1>
        <img 
        src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}  
        alt="Icon-Weather-Condition"/>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default CardsWeather