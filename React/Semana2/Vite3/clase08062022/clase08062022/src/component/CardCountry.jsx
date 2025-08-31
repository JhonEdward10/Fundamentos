import React from 'react'

const CardCountry = ({country}) => {

    console.log(country);


  return (
      <article className='Card'>
          <img src={country.flags.svg} alt={`flag ${country.name.official}`} />
          <h2><b>Pais: </b>{country.altSpellings[2]}</h2>
          <p><b>Capital: </b>{country.capital[0]}</p>

      </article>
  )
}

export default CardCountry