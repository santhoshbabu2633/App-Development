import React, { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adminlogin.css';
import store from '../redux/store';
import { setEmail } from '../redux/reducer';

const Admin = forwardRef(({}, ref) => {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value; 

    store.dispatch(setEmail(email));

    if (email === 'santhoshbabusankar2014@gmail.com' && password === '25') {
   
      navigate('/dbover');
    } else {
      
      alert('Invalid email or password. Please try again.');
    }
  }

  return (
    <div className='bg1a'>
      <div className='containera'>
        <form onSubmit={onSubmit}>
          <div className='heada'><label>Sign In</label></div>
         <br></br>
         <b>Admin</b>
          <br></br>
        
          <br></br>
          <br></br>
        
          <div className='field1a'>Email:</div>
          <input className="input-fielda" type="text" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <div className='field2a'>Password:</div>
          <input className="input-field2a" type="password" placeholder="Enter password"></input>
          <br></br>
          <br></br>
          <button type='submit' ref={ref} className='bt'>
            <div className='bb'>Sign in</div>
          </button>
          <br></br>
          <div className='fpa'><p>Forget Password?</p></div>
        </form>
      </div>
    </div>
  );
});

export default Admin;
