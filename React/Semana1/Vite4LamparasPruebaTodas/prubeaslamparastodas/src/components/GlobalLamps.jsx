import React, { useState } from 'react'
import Lamps from './Lamps'

const GlobalLamps = () => {

    const [isOnGlobal, setIsOnGlobal] = useState('on')

    const switchLigthGlobal = () => {
        if(isOnGlobal === 'off'){
            setIsOnGlobal('on')
        } else {
            setIsOnGlobal('off')
        }

    }

  return (

    <div className='global-lamp'>

        <Lamps 
            isOn={isOnGlobal} 
            switchLigthGlobal={switchLigthGlobal}
        />
        <Lamps 
            isOn={isOnGlobal} 
            switchLigthGlobal={switchLigthGlobal}
        />
        <Lamps 
            isOn={isOnGlobal} 
            switchLigthGlobal={switchLigthGlobal}
        />  
    </div>

  )
}

export default GlobalLamps