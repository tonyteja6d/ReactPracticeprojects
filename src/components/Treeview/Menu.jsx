import React from 'react'
import ListRender from './ListRender'
import menus from './data'



function Menu() {

        
    return (
        <div className=' bg-[#75afe683] w-[30%] h-lvh'>
            <ListRender menu = {menus} tony="tonyyy" />
        </div>
    )
}

export default Menu