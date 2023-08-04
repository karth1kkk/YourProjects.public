import React from 'react'
import "./login.css"
import axios from "axios";
import { useRef,useContext } from "react";
import { Context } from "../context/Context"
import { toast } from 'react-toastify';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, FetchData } = useContext(Context);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGINSTART" });
    try {
      const res = await axios.post("https://your-projects-com.vercel.app/backend/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGINSUCC", payload: res.data  });
      toast.success('Login Sucessfull');
    } catch (err) {
      dispatch({ type: "LOGINFAILED" });
      toast.error('Login error: Username or Password is incorrect.');
    }
  };

    return (
        <div className='login'>
            <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">Login</span>
                <label className='mail'>Username</label>
                <input className='mail1' type='text' placeholder="Enter your username..." ref={userRef}/>
                <label className='pass'>Password</label>
                <input className='pass1' type='password' placeholder="Enter your password..." ref={passwordRef}/>
                <button className='loginButton'type="submit" disabled={FetchData}>Login</button>
            </form>
            <span className="loginTitle1">Don't have an account?</span>
            <button className='registerButton'><a className="link" href="/register">Register</a></button>
        </div>
    )
}

export default Login
