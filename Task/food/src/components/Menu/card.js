import React from 'react'
import '../Menu/menu.css'
import Navbar from '../Navbar/navbar'
import img1 from '../Home/assets/burger.jpeg'

const Cart = (props) => {
    console.log(props);
  return (
    <div>
  <div className='cards'>
  <div className='card'>
    <img src={props.img1} alt='myPic' className='card_img' />
    <div className='card_info'>
      <span className='card_category'>{props.name}</span>
      <h3 className='card_title'> Price: {props.price} </h3>
      <a target="_blank" rel="noreferrer"> 
      <div className="btn-group">
        <button style={{paddingRight:"20px"}}> + </button>
        <button> - </button>
      </div>
      </a>
    </div>
  </div>
</div>
</div>

  )
}

export default Cart