import React, { useState } from 'react'
import {QRCodeCanvas} from 'qrcode.react';

const QrCode = () => {
    const [input,setInput]=useState("")
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
            setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setValue(input)
    }
  return (
<div className='container'>
<div className='qrContainer'>
      <h2>Qr Code Generator</h2>
     <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleChange} />
        <button>Generate QR</button>
     </form>
      <QRCodeCanvas value={value} />
    </div>
</div>
  )
}

export default QrCode
