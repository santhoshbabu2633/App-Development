import React, { useEffect, useState } from 'react';
import './dbuserdetails.css';

function Dbuserdetails() {
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      // Parse the JSON string back into an object
      const userData = JSON.parse(userDataString);

      // Update the state with the user data
      setUserObj(userData);
    }
  }, []);

  return (
    <div className='dbd'>
      <form>
        <div className='hod'>User Details</div>
        <div className='r1'>
          <p>Name: {userObj.firstNamec} {userObj.secondNamec}</p>
        </div>
        <div className='r2'>
          <p>Email: {userObj.emailc}</p>
        </div>
        <div className='r3'>
          <p>Password: {userObj.pass}</p>
        </div>
        <div className='r4'>
          <p>Confirm Password: {userObj.rpass}</p>
        </div>
        <p>He is newly created an account!!</p><br></br>
      </form>
    </div>
  );
}

export default Dbuserdetails;
