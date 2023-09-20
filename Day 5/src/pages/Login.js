import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Login.css';
function Login() {

  return (
    <div className='bg1'>
    <div className='container'>
      <form>
      <div className='head'><label>Sign In</label></div>
      
     <p1>Don't have an account? <Link to="/Create"> Signup</Link></p1><br></br><br></br><br></br>
      <div className='field1'>Email:</div>
      <input className="input-field" type="text" placeholder="Enter Email"></input><br></br><br></br>
      <div className='field2'>Password:</div>
      <input className="input-field2" type="password" placeholder="Enter password"></input><br></br><br></br>
      <button className='bt'><div className='bb'>Sign in</div></button><br></br>
      <div className='fp'><p>Forget Password?</p></div>
      </form>
     </div>
     </div>
    
  );
}

export default Login;
