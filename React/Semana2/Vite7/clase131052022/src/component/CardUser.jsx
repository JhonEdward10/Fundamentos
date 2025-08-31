import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'

const CardUser = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
    .then(res => setUser(res.data.results[0]))
    .catch(err => console.log(err))

  }, [])

  console.log(user);

  const getUserRandom = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => setUser(res.data.results[0]))
    .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <ul>
        <li><img src={user?.picture.large} alt="FotografiaPersona" /></li>
        <li><b>Name:</b>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</li>
        <li><b>Email:</b>{`${user?.email}`}</li>
        <li><b>Country:</b>{`${user?.location.country}`}</li>
        <button onClick={getUserRandom}>Next</button>
      </ul>

    </div>
  )
}

export default CardUser