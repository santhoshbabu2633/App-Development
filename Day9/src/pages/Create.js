import React, { forwardRef, useState } from 'react';
import './Create.css';
import store from '../redux/store';
import base from '../redux/store';
import { Link, useNavigate} from 'react-router-dom';
import { setEmailc } from '../redux/reducer';
import { setFirstNamec } from '../redux/reducer';
import { setSecondNamec } from '../redux/reducer';

import { setPass } from '../redux/reducer';
import { setRpass } from '../redux/reducer';
const Create=forwardRef(({},ref)=>
{
 const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault();
    store.dispatch(setFirstNamec(event.target[0].value));
    store.dispatch(setSecondNamec(event.target[1].value));
    store.dispatch(setEmailc(event.target[2].value));
    store.dispatch(setPass(event.target[3].value));
    store.dispatch(setRpass(event.target[4].value));

    navigate('/dbuser')
  }


  return (
    <div className='bg1'>
    <div className='container1'>
      <form onSubmit={onSubmit}>
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
     <button className='bt1' ref={ref}>
  <div className='bb'>Sign up</div>
</button>
<br />
<br />


      </form>
      </div>
    </div>

    
  );
}
)

export default Create;
