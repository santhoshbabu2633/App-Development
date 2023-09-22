import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import { Link } from 'react-router-dom';
import base from '../redux/store';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const contentData = [
    { title: 'Lifestyle', img: 'lifestyle.jpg' },
    { title: 'Love', img: 'love.jpg' },
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
        <Link to="">Story Review</Link>
        <Link to="">News</Link>
        <div className="dropdown">
          <button className="dropbtn">Genre </button>
          <div className="dropdown-content">
            <Link to="">Lifestyle</Link>
            <Link to="">Love</Link>
            <Link to="">Crime</Link>
            <Link to="">Horror</Link>
            <Link to="">Kids</Link>
            <Link to="">Mythology</Link>
            <Link to="">Non-Fiction</Link>
            <Link to="">Comedy</Link>
          </div>
        </div>
        <Link to="more">Contact Us</Link>
        <Link to="Login">Sign In</Link>
        <img className='main' src="ml.png"></img>
        <div className='rr'>
          <div className="dropdown">
            <i className="fa fa-bars">Menu </i>
            <div className="dropdown-content"></div>
          </div>
          <div className='cr'>
            <img className='logo' src="ic.png"></img>
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img className='ima' src="barr.png"></img>
      </div>

      {/* Wrap the filtered content in a parent container */}
      <div className="content-container">
        {filteredContent.map((item, index) => (
          <div className={`con${index + 1}`} key={index}>
            <img className={`img${index + 1}`} src={item.img} alt={item.title} />
            <div className='ol3'>{item.title}</div><br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
