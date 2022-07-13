import React,{useState,useContext} from "react";
import Footer from "./Footer.jsx"
import Sales from "./Sales.jsx";

import {UserContext} from '../states/UserContext';

const Home = () => {
  const {userValue,tokenValue,isLoggedinValue} = useContext(UserContext);
  const [isLoggedIn,setIsLoggedIn] = isLoggedinValue;
  const [user,setUser] = userValue;
  const [token,setToken] = tokenValue;

  // if(token){
    
  // }
  return (
    <>
      <div className="home-page">
       <div className="home-div">
       <p className="pt-5">WELCOME</p>
       <div className="slide-right">
        <h1>AFFORDY - Verified Old Products</h1></div>
       </div>
      </div>
      <Sales/>
      <Footer/>
    </>
  );
};

export default Home;
