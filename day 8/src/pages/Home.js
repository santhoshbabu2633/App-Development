import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import { Link } from 'react-router-dom';
import base from '../redux/store';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const contentData = [
    { title: 'Lifestyle', img: 'lifestyle.jpg' },
    { title: 'Love', img: 'log.webp' },
    { title: 'Crime', img: 'cg.jpg' },
    { title: 'Mythology', img: 'myt.jpg' },
    { title: 'Non-Fiction', img: 'ng.jpg' },
    { title: 'Comedy', img: 'cog.jpg' },
    { title: 'Horror', img: 'ghost.jpg' },
    { title: 'History', img: 'his.jpg' },
    { title: 'Kids', img: 'kid.jpg' },
  ];

  const filteredContent = contentData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='hbg'>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">Story Review</Link> 
        <Link to="/">News</Link> 
        <Link to="/Genere">Genre </Link>
        <Link to="/more">Contact Us</Link> 
        <Link to="/Login">Sign In</Link> 
        <img className='mba' src="ml.png" alt="Logo" /> 
        <div className="cred">
          <img className='logo' src="ic.png" alt="Logo" /> 
          <div className='fetch'>
           
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <img className="bg2" src="bg21.jpg" alt="Background" /> 
      <div className='bl'></div>
      <div className='conten'>
      </div>
      <div className='conte'>
        "Share your experiences here. <br></br>You can share your story and unleash your creativity to others.<br></br> This platform helps in sharing and reading multiple stories shared by<br></br> creative people around the world.<br></br> You are always welcome."
      </div>
      <img className='bg3' src="story.jpg" alt="Background" /> 
      <div className='bl2'></div>
      <div className="conte1">
        "Make Yourself Comfortable with us ,You can Discover  <br></br> and  post stories in various genres on our platform<br></br>Let The World hear your stories<br></br>Have a great journey ahead"
      </div>
      <div className='conten1'> 
      </div>
      
      <div className="footer"></div>
      <div className="pp">
      Privacy Policy
      </div>
      <div className="cop">
        Copyright © 2023.All rights reserved
      </div>
      <div className='tc'>
        Terms&conditions
      </div>
    </div>
  );
}
