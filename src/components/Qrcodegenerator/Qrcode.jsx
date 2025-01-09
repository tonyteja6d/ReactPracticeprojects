import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function Qrcode() {

    const [input , setinput] =useState("")
    const [Qrgene ,setQrgene] = useState("")

    function hanleclick () {
        
         input.trim() === "" ? `${alert('input not to empty')}` :setQrgene(input) ;
         
    }
   
  return (
    <div> 
 
        <div className=''>
            <h1 className='mb-8'>enter your data</h1>
            <input  onChange={(e)=>setinput(e.target.value)} value={input} placeholder='enter your name' className='border-2 px-4 py-0.5 rounded border-green-400' type="text"  />
            <button onClick={hanleclick} className='border-2 border-red-600 ml-4 rounded px-4 py-0.5 bg-slate-50'>generat qr code</button>
        </div>
        <QRCode className='mt-6' value={Qrgene}/>
    </div>
  )
}

export default Qrcode