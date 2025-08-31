import React from 'react'

const Card = ({car, deleteCar}) => {


  return (
    <article className='card-of-card'>
        <h2>{`#${car.id} ${car.brand} ${car.color}`}</h2>
        <p><b>Model: </b>{car.model}</p>
        <p><b>Year: </b>{car.year}</p>
        <button onClick={() => deleteCar(car.id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
    </article>
  )
}

export default Card