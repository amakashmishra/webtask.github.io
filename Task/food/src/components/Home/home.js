import React from 'react'
import '../Home/home.css'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/navbar'

const home = () => {
  return (
    <section className="banner">
        <Navbar />
        <div className="row">
            <div className="col">
                <div class="content">
                    <h1>Welcome to Food's <span className='spam1'>Kitchen</span></h1>
                    <span><button type="button">{<Link to="/menu" style={{textDecoration:"none", color:"white"}}>GO TO MENU</Link>}</button></span>
                </div>
            </div>
        </div>
        
        
        
    </section>
    
  )
}

export default home