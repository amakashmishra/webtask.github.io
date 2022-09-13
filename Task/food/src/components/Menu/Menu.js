import React from 'react'
import '../Menu/menu.css'
import Navbar from '../Navbar/navbar'
import Cart from './card'
import Data from '../Menu/data/feeds'
import img1 from '../Home/assets/burger.jpeg'
import img2 from '../Home/assets/fries.jpeg'
import img3 from '../Home/assets/coke.jpeg'
import img4 from '../Home/assets/pepsi.jpeg'


const Menu = (val) => {
  return (
    <div>
      <Navbar />
      <Cart
      img1 = {img1} 
      name = {Data[0].name}
      price = {Data[0].price}
      />
      <Cart 
        img1 = {img2} 
        name = {Data[1].name}
        price = {Data[1].price}
      />

      <Cart 
        img1 = {img3} 
        name = {Data[2].name}
        price = {Data[2].price}
      />

      <Cart 
        img1 = {img4} 
        name = {Data[3].name}
        price = {Data[3].price}
      />
    
    </div>


  )
}

export default Menu