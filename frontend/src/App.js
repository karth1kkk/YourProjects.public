import Home from "./home/home";
import Single from "./single/single";
import Write from "./write/Write";
import Setting from "./settings/Setting";
import Register from "./register/Register";
import Login from "./login/Login";
import React  from 'react';
import {
  BrowserRouter as 
  Router,
  Route,
  Switch}  
  from "react-router-dom";
import NavMenu from "./menubar/menubar";
import Postshow from "../src/postshow/Postshow";
import MyPosts from "./myposts/MyPosts";
import { useContext } from "react";
import { Context } from "./context/Context";
import Account from "./account/Account";

function App() {
  const { user } = useContext(Context);
  return(
  <Router>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/register">{user ? <Home/> :<Register/>}</Route>
    <Route path="/login">{user ? <Home/> :<Login/>}</Route>
    
    <Route path="/postshow">
    <Postshow/>
    </Route>

    <Route path="/nav">
    <NavMenu/>
    </Route>

    <Route path="/single">
    <MyPosts/>
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/user/:Id">
    <Account/>
    </Route>

    <Route path="/write">{user ?<Write/>: <Register/>}</Route>
    <Route path="/setting">{user ?<Setting/>: <Register/>}</Route>
    <Route path="/post/:Id">
    <br/>
    <br/>
    <br/>
    <Single/>
    </Route>

    </Switch>
  </Router>
  )
}

export default App;