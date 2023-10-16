import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faRightFromBracket,faCircleInfo } from '@fortawesome/free-solid-svg-icons'; 
import { Link,useNavigate } from 'react-router-dom';
import base from '../redux/store';
import  './navabar.css';
function Navbar() {

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
        <div className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Genere">Genre</Link>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/">Sign In</Link> 
        <Link to="/add">Add Story+</Link>
        
        <Link to="/" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffff" }} /> Logout
        </Link>
        
        <img className='mba' src="ml.png" alt="Logo" />
        <div className="cred">
          <img
            className='logo'
            src="ic.png"
            alt="Logo"
            onClick={navigateToHomePage} // Call the function to navigate
          />
          <div className='fetch'>
            <p>{base.getState().userdata.email}</p>
          </div>
        </div>
      </div>
    )
}

export default Navbar
