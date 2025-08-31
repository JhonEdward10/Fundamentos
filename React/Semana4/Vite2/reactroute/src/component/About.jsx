import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();
    
    const goToHome = () => navigate('/')

  return (
    <div>
        <h1>About Us</h1>
        <button onClick={goToHome}>Go to Home</button>
    </div>

  )
}

export default About