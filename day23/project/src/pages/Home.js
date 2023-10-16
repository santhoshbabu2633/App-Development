import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket,faCircleInfo } from '@fortawesome/free-solid-svg-icons'; 
import { Link,useNavigate } from 'react-router-dom';
import base from '../redux/store';
import Navbar from '../charts/navbar';

export default function Home() {
  const navigate = useNavigate(); 
  const navigateToHomePage = () => {
    navigate('/userdash'); // Use the navigate function to navigate
  };
  const handleLogout = () => {
    // Remove the token (update as needed depending on where you store it).
    localStorage.removeItem('token'); // Example: Remove from localStorage.

    // Redirect the user to the login page.
    navigate('/');
  };

  return (
    <div className='hbg'>
      <Navbar/>

      <div className='oc'>
        <img className='imo1' src="storyyy.jpg" alt="Story" />
        <div className="wr">Here you can unleash your Stories</div>
      </div>

      <div className="footer"></div>
      <div className="pp">
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className="cop">
        Copyright © 2023. All rights reserved
      </div>
      <div className='tc'>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </div>
  );
}
