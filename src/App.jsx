import React from 'react'
import Accordion from './components/accodion/accodion'
import Menu from './components/Treeview/menu'
import Qrcode from './components/Qrcodegenerator/Qrcode'
import Imageslider from './components/imageslider/imageslider'
 


function App() {
  return (
    <div>
      {/* <Accordion /> */}
       {/* <Menu /> */}
       {/* <Qrcode /> */}
       <Imageslider url={"https://picsum.photos/v2/list"}
       pages={"1"}
       limit={'4'} />
    </div>
  )
}

export default App
