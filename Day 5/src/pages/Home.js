import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  

  const contentData = [
    { title: 'Lifestyle', img: 'lg.jpg' },
    { title: 'Love', img: 'log.webp' },
    { title: 'Crime', img: 'cg.jpg' },
    { title: 'Horror', img: 'ghost.jpg' },
    { title: 'Mythology', img: 'myt.jpg' },
    { title: 'Non-Fiction', img: 'ng.jpg' },
    { title: 'Comedy', img: 'cog.jpg' },
    { title: 'History', img: 'his.jpg' },
    { title: 'Kids', img: 'kid.jpg' },
   
  ];


  const filteredContent = contentData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='hbg'>
      <div className="navbar">
        <Link to="/Create">Story Review</Link>
        <Link to="/Create">News</Link>
        <div className="dropdown">
          <button className="dropbtn">Genre
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="Create">Lifestyle</Link>
            <Link to="Create">Love</Link>
            <Link to="Create">Crime</Link>
            <Link to="Create">Horror</Link>
            <Link to="Create">Kids</Link>
            <Link to="Create">Mythology</Link>
            <Link to="Create">Non-Fiction</Link>
            <Link to="Create">Comedy</Link>
          </div>
        </div>
        <Link to="more">Contact Us</Link>
        <Link to="Login">Sign In</Link>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      
      {filteredContent.map((item, index) => (
        <div className={`con${index + 1}`} key={index}>
          <img className={`img${index + 1}`} src={item.img} alt={item.title} />
          <div className='ol3'>{item.title}</div><br></br>
        </div>
      ))}

      
    </div>
  );
}
