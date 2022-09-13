import React from 'react'
import '../Navbar/navbar.css'
import LogoName from '../Home/assets/restaurant_24px.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
            <div className="header">
            <div className="navbar">
                <div className="logo">
           	      <img src={LogoName} alt="logo" />
                  <h5>Food's Restaurant</h5>
                </div>
                <ul>
                    <li><Link to="/register">SignUp</Link></li>
                    <li><Link to="/login">SignIn</Link></li>
                    <li style={{color:"white"}}><Link to="/card"><ShoppingCartIcon /></Link></li>
                    
                </ul>
            </div>
        </div>
  )
}

export default Navbar