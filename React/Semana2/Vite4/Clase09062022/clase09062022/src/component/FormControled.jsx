import React, { useState } from 'react'

const FormControled = () => {

    const [InpuText, setInpuText] = useState('')
    const [textError, setTextError] = useState('')

    const onChangeInput = e => {
       setInpuText(e.target.value);

       if(e.target.value.length > 10){
           setInpuText('')
           setTextError('No puedes escribir mas')
       }

    }

  return (
      <form>
          <input
          value={InpuText}
          onChange={onChangeInput}
          type="text"
            />
        <h1>{textError}</h1>
      </form>
  )
}

export default FormControled