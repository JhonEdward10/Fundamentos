import React from 'react'

const Lamps = ({isOn, switchLigthGlobal}) => {

  return (
    <div className='lamp-and-btn'>
      <div className={`lamp ${isOn}`}></div>
      <button onClick={switchLigthGlobal} className='lamp-btn'>{isOn}</button>
    </div>
  )
}

export default Lamps