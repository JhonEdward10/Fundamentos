import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Card from './component/Card'

function App() {
  
  const [cars, setCars] = useState()


  const getAllCars = () => {
    axios.get('https://cars-crud.herokuapp.com/cars/')
    .then(({data}) => setCars(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCars()
    }, [])
  
  const createNewCar = () => {

    const newCar = {
      brand: 'KTM',
      model: 'DUKE 200',
      color: 'ORANGE',
      year: 2021,
      price: 12.000
    }

    axios.post('https://cars-crud.herokuapp.com/cars/', newCar)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => getAllCars())
  }


  const deleteCar = id => {
    axios.delete(`https://cars-crud.herokuapp.com/cars/${id}`)
	  .then(res => console.log(res))
	  .catch(error => console.log(error))
    .finally(() => getAllCars())

  }


  const updateCarById = id => {

    const newDataCar = {
      brand: 'KTM',
      model: 'DUKE 250',
      color: 'WHITE',
      year: 2021,
      price: 12.000
    }

    axios.put(`https://cars-crud.herokuapp.com/cars/${id}/`, newDataCar)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => getAllCars())
  }

  const updatePartialById = id => {
    
    axios.patch(`https://cars-crud.herokuapp.com/cars/${id}/`, {year: 1994})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => getAllCars())
  }


  return (
    <div className="App">
      <button onClick={createNewCar}>Create a new car</button>
      <button onClick={() => updateCarById()}>Update Price Car</button>
      <button onClick={() => updatePartialById()}>Update Year Car</button>
      <div className='card-container'>
        {
          cars?.map(car => (
            <Card 
            key={car.id}
            car={car}
            deleteCar={deleteCar}
            />
          ))
        }

      </div>

    </div>
  )
}

export default App
