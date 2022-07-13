import React,{ useContext, useState } from 'react';
import loginpic from "../images/loginpic.png";
import { NavLink,useHistory } from "react-router-dom";
// import { UserContext } from "../App";
import axios from "axios";

// States
import {UserContext} from '../states/UserContext';


const Login = () => {
  let history = useHistory();
//1.Conact backend 
//2. connect backend and verify with backend
//3.login success / login and registration = logout
  const [logInServerError,setlogInServerError] = useState("");
  const {userValue,tokenValue,isLoggedinValue} = useContext(UserContext);
  const [isLoggedIn,setIsLoggedIn] = isLoggedinValue;
  const [user,setUser] = userValue;
  const [token,setToken] = tokenValue;  



  const handleLogIn = (event) => {
    event.preventDefault();
    
    var email = event.target.email.value;
    var password = event.target.password.value;
    var user_details = {
      "email" : event.target.email.value,
      "password": event.target.password.value
    }
    console.log(user_details);
    axios
      .post("https://affordy.herokuapp.com/api/user-login", user_details)
      .then((response) => {
        // alert(response.data.msg);
        if(response.status == 200){
          localStorage.setItem('token',response.data.token);
          setToken(response.data.token);
          setIsLoggedIn(true);
          // setUser({
          //   name: response.data.name,
          //   email: response.data.email,
          //   sales: response.data.sales,
          //   message: response.data.message,
          // })
          console.log(response.data);
          setlogInServerError("");
          
          history.push('/');
          console.log("Successfully logged in")
        }
        else{
          setlogInServerError(response.data.msg);
          console.log("Failure logged in")

        }
      })
      .catch((error) => {
        // alert(error.response.data.msg);
        setlogInServerError(error.response.data.msg);
        
        console.log(error.response.data.msg);
      });
    
  }
  

  return (
    <section className="sign-in">
      <div className="container mt-5">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={loginpic} alt="Login pic" />
            </figure>
            <NavLink className="signup-image-link" to="/signup">
              Create an Account
            </NavLink>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Signin</h2>
            <form method="POST" className="register-form" id="register-form" onSubmit={handleLogIn}>
              <div className="form-group">
                <label for="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="off"
                  placeholder="Your Email"
                  
                />
              </div>
              <div className="form-group">
                <label for="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="off"
                  placeholder="Your Password"
                  

                />
              </div>
              <small style={{color: "red"}}>{logInServerError}</small>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Signin"
                  
                />

              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
 
  
  export default Login;