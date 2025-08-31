import { useState } from 'react'
import './App.css'
import CardCountry from './component/CardCountry'
import Loader from './component/Loader'
import useCountryAPI from './hooks/useCountryAPI'

function App() {

  const {countries, isLoading} =useCountryAPI()

  return (
    <div className="App">
      {
        isLoading ?

        <Loader />

        :

        countries?.map(country => (
          <CardCountry 
          country={country}
          key={country.area}
          />
        ) )

      }
    </div>
  )
}

export default App
