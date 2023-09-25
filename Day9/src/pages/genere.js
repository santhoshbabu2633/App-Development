import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './genere.css';
import { Link } from 'react-router-dom';
import base from '../redux/store';

export default function Genre() { 
  const [searchQuery, setSearchQuery] = useState('');

  const contentData = [
    { title: 'Lifestyle', img: 'lifestyle.jpeg' },
    { title: 'Love', img: 'love.jpeg' },
    { title: 'Crime', img: 'cg.jpg' },
    { title: 'Mythology', img: 'myt.jpg' },
    { title: 'Non-Fiction', img: 'ng.jpg' },
    { title: 'Comedy', img: 'cog.jpg' },
    { title: 'Horror', img: 'ghost.jpeg' },
    { title: 'History', img: 'his.jpg' },
    { title: 'Kids', img: 'kids.jpg' },
  ];

  const filteredContent = contentData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='hbg'>
      <div className="navbarg">
        <Link to="/Home">Home</Link>
        <Link to="">Story Review</Link> 
        <Link to="/genere">Genre</Link>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/">Sign In</Link>
        <Link to="">Add Story+</Link> 
        <img className='mba' src="ml.png" alt="Logo" />
        <div className="cred">
          <img className='logo' src="ic.png" alt="Logo" />
          <div className='fetch'>

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
        <img className='ima' src="barr.png" alt="Search" /> 
      </div>

      <div className="content-container">
        {filteredContent.map((item, index) => (
          <Link to="/love" key={1}> 
          <div className={`con${index + 1}`} key={index}>
            <img className={`img${index + 1}`} src={item.img} alt={item.title} />
            <div className='ol3'>{item.title}</div>
          </div>
          </Link>
        ))}
      </div>

      <div className="footer">
        <div className="pp">
        <Link to="/privacy">  Privacy Policy</Link></div>
        <div className="cop">Copyright © 2023. All rights reserved</div>
        <div className='tc' ><Link to="/terms"> Terms&Conditions</Link></div>
      </div>
    </div>
  );
}
