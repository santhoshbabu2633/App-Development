import React, { useState } from 'react';
import './Create.css';
import { Link} from 'react-router-dom';
function Create() {

  return (
    <div className='bg1'>
    <div className='container1'>
      <form>
      <div className='head'><label>Sign up</label></div>
      
      <p1>Already have an account?<Link to="/">Sign In</Link> </p1><br></br><br></br><br></br>
      <div className='field11'>First name</div>
      <input className="input-field11" type="text" placeholder="Enter First name"></input><br></br><br></br>
      <div className='field21'>Last name</div>
      <input className="input-field21" type="text" placeholder="Enter Last name"></input><br></br><br></br>
      <div className='field31'>Email:</div>
      <input className="input-field31" type="text" placeholder="Enter Mail Id"></input><br></br><br></br>
      <div className='field41'>Password:</div>
      <input className="input-field41" type="password" placeholder="Enter password"></input><br></br><br></br>
      <div className='field51'>Repeat Password:</div>
      <input className="input-field51" type="password" placeholder="Enter password"></input><br></br>
      <button className='bt1'><div className='bb'>Sign up</div></button><br></br><br></br>

      </form>
      </div>
    </div>

    
  );
}

export default Create;
