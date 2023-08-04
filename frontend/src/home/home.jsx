import React from 'react';
import './home.css';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import NavMenu from '../menubar/menubar';
import { Category } from '../slider/Slider';
import Contents from '../contents/contents';
import Footer from '../footer/footer';

const Home = () => (
  <div>
  <NavMenu/>
  <div className="bontainer">
    <div className='header'>
      <h3>Upload your </h3>
      <h2>Projects here at</h2>
      <h1>YourProjects.com</h1>
      <p>A platform for creators to upload and share their
        Projects such as IOT,
      </p>
    </div>
    <div className='header2'>
    <p> Web Development and so on</p>
    </div>
    <div className='button'>
      <button to="/write">Get Started<ArrowRightIcon/></button>
    </div>
  </div>
  <Category/>
  
    <Contents/>
    <Footer/>
  </div>
);

export default Home;
