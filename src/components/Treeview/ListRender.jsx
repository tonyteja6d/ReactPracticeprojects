import React from 'react'
import MenuItems from './MenuItems'

function ListRender({menu}) {
  return (
    <ul>
     {menu && menu.length ? menu.map( item => <li key={item.label} className='p-4'> <MenuItems  item ={item}    /> </li>   ):null}  
    </ul>
  )
}

export default ListRender