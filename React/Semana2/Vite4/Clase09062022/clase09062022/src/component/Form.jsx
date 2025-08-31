import React, { useState } from 'react'

const Form = () => {

    const [InpuText, setInput] = useState('')

    const onSubmitFunction = e => {
        e.preventDefault();
        setInput(e.target.children[0].value);

    }

  return (
      <form onSubmit={onSubmitFunction} action="">
          <input type="text" />
          <button>Print Text</button>
          <h1>{InpuText}</h1>
      </form>
  )
}

export default Form
