import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { toast } from 'react-toastify';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-projects-com.vercel.app/backend/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      toast.sucess('Registration Success: Now Log in using your Credentials')
    } catch (err) {
      toast.error('Registration error: Username, Password or Email has already been taken.')
    }
  };
  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
        <label className="user">Username</label>
        <input
          className="user1"
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mail">Email</label>
        <input
          className="mail1"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        <label className="pass">Password</label>
        <input
          className="pass1"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button className="registerButt" type="submit">
          Register
        </button>
      </form>
      <label className="pass2">Already Have an Account?</label>
      <button className="loginButt">
        <a className="link" href="/login">
          Login
        </a>
      </button>
      
    </div>
  );
}

export default Register;
