import React from 'react'
import './register.css'
import {Link} from 'react-router-dom'

const register = () => {
  return (
    
    <div className="center">
      <h1>Registration</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Create Password</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <input type="submit" value="Register" />
        <div className="signup_link">
          Not a member? <Link to="/login">SignIn</Link>
        </div>
      </form>
    </div>
  )
}

export default register