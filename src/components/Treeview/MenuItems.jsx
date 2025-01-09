import React, { useState } from 'react'
import ListRender from './ListRender'

function MenuItems({item}) {

  const [display , setdisplay] = useState({})

  function handleclick (id){
    setdisplay({
        ...display,
        [id]:!display[id]
    })

  }
  
  console.log(display)
  return (
    <div>
        <div className='flex cursor-pointer items-center justify-between w-[50%]  ' onClick={()=>handleclick(item.label)}>
          <p className=' p-1'>{item.label}</p>
          {item && item.children && item.children.length>0 ? <span className='text-xl ' onClick={()=>handleclick(item.label)}>
          {display[item.label] ? "-" :"+" }
          </span> : null}
        </div>
        {
            item && item.children && item.children.length && display[item.label] > 0 ?
            <ListRender menu = {item.children}  /> : null
        }
    </div>
  )
}

export default MenuItems