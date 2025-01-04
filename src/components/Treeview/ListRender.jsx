import React from 'react'
import MenuItems from './MenuItems'

function ListRender(list) {

    console.log(list.menu)
      
  return (
    <ul>
     {list.menu && list.menu.length ? list.menu.map( item => <li key={item.label} className='p-4'> <MenuItems  item ={item}    /> </li>   ):null}  
    </ul>
  )
}

export default ListRender