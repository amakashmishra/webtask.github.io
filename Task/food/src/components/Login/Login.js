import React, { useState } from "react";
import '../Login/login.css'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  let result = ''
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  return (
<div className="center">
  <h1>Login</h1>
  <form onSubmit={handleSubmit}>
    <div className="txt_field">
      <input type="text" name="uname" required/>
      <span></span>
      <label>Username</label>
      {renderErrorMessage("uname")}
    </div>
    <div className="txt_field">
      <input type="password" name="pass" required />
      <span></span>
      <label>Password</label>
      {renderErrorMessage("pass")}
    </div>
    <div className="pass">Forgot Password?</div>
    <input type="submit" value="Login" />
    <div className="signup_link">
      Not a member? <Link to="/register">SignUp</Link>
      {isSubmitted ? <div>{navigate('/')}</div> : result}
    </div>
  </form>
</div>
  )
}

export default Login