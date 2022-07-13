import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from './components/Logout';
import Sell from "./components/Sell"
import Banner from "./components/Banner"
import { Route, Switch } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Upload from "./components/Sell";

// States
import {UserProvider} from "./states/UserContext";


export const UserContext = createContext();

const App = () => {
  return (
    <UserProvider>
    <Navbar/>

    <Switch>
      <Route exact path="/">
        {/* <Banner/> */}
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
        <Footer/>
      </Route>

      <Route exact path="/contact">
        <Contact />
        <Footer/>
      </Route>

      <Route exact path="/login">
        <Login />
        <Footer/>
      </Route>

      <Route exact path="/user-signup">
        <Signup />
        <Footer/>
      </Route>

      <Route exact path="/LogOut">
        <Logout />
        <Footer/>
      </Route>

      <Route exact path="/sell-product">
        <Upload />
        <Footer/>
      </Route>

      {/* <Route exact path="/logout">
        <Logout />
      </Route> */}

      {/* <Route exact path="/sell">
        <Sell/>
        <Footer/>
      </Route> */}

      <Route>
        <Errorpage />
        <Footer/>
      </Route>
    </Switch>
    </UserProvider>
  );
};


  
export default App;
