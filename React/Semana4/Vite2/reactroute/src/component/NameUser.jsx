import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const NameUser = () => {

    const { name } = useParams()
    const [countries, setCountry] = useState()

    useEffect(() => {
        const URL = `https://restcountries.com/v3.1/name/${name}`;

        axios.get(URL)
        .then(res => setCountry(res.data))
        .catch(err => console.log(err))
        
    }, [ name ])
    
  return (
    <article>
        {
            countries?.map(country => (
                <div key={country.name.official}>
                    <img src={country.flags.svg} alt="" />
                    <h1>{country.name.common}</h1>
                </div>
            ))
        }
    </article>
  )
}

export default NameUser