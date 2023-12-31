import React, { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import store from '../redux/store';
import { setEmail } from '../redux/reducer';

const Login = forwardRef(({}, ref) => {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    store.dispatch(setEmail(event.target[0].value));

   
    const buttonClicked = event.nativeEvent.submitter;

    if (buttonClicked.name === 'signIn') {
      navigate('/Home');
    } else if (buttonClicked.name === 'admin') {
      navigate('/admin');
    }
  }

  return (
    <div className="bg1">
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="head">
            <label>Sign In</label>
          </div>

          <p1>
            Don't have an account? <Link to="/Create"> Signup</Link>
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="field1">Email:</div>
          <input className="input-field" type="text" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <div className="field2">Password:</div>
          <input className="input-field2" type="password" placeholder="Enter password"></input>
          <br></br>
          <br></br>
          <button type="submit" ref={ref} name="signIn" className="bt">
            <div className="bb">Sign in</div>
          </button>
          <br></br>
          <div className="wt"><button type="submit" ref={ref} name="admin" className="bt">
            <div className="bb2">Admin</div>
          </button></div>
          <br></br>
         
        </form>
      </div>
      
    </div>
  );
});

export default Login;

