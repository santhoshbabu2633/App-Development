import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Contact.css';
import base from '../redux/store';
import axios from 'axios';
import Navbar from '../charts/navbar';
const Contact = forwardRef(() => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    
    const fname = event.target[0].value;
    const sname = event.target[1].value;
    const pno = event.target[2].value;
    const eid = event.target[3].value;
    const que = event.target[4].value;
    const token = localStorage.getItem('token');
    const userData = {
      firstname:fname,
      secondname:sname,
      phoneNo:pno,
      emailId:eid,
      query:que
    };
    
    axios
      .post('http://localhost:8081/api/feed/createfeedback', userData,
    
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log('Success');
        localStorage.setItem('token',response.data.token);
        navigate('/Home');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setErrorMessage('Registration failed. Please try again.');
      });
    
   
  }

  
 
  return (
    <div className="cbg">
      <Navbar/>

        <div className="contacth">CONTACT</div>
        <div className="myd">
          <div className="hrr">
            <hr></hr>
          </div>
          <div className="em">
            <b>Email</b>: onceuponatime@gmail.com
          </div>
          <br></br>
          <div className="phone">
            <b>Phone</b>: 8220447907
          </div>
          <br></br>
          <div className="location">
            <b>Location</b>: 4/448, A.K Nagar, Kanjirankal, Sivagangai, 630562
          </div>
          <br></br>
        </div>

        <div className="qc">
          <div className="ques">What you Get When Asking Your Question</div>
          <br></br>
          <div className="po">
            <li>Less than 12-hour response to your question.</li>
            <br></br>
            <li>The response for your Queries will send to your registered email</li>
            <br></br>
            <li>Our team will work on your queries as soon as we receive</li>
          </div>
        </div>
        <div className="contco">
          <img className="contacts" src="contact.jpg"></img>
          <div className="logos">
           
            <img className="logo1" src="instagram.png" alt="Instagram" />
            <img className="logo2" src="facebook.png" alt="Facebook" />
            <img className="logo3" src="x.png" alt="Twitter" /> 
          </div>
          <div className="ld">
            
            <b>Instagram</b>: oceu_ponatimeofficial
            <br></br>
            <br></br>
            <b>Facebook</b>: onceuponatimestory
            <br></br>
            <br></br>
            <b>X</b>: onceuponatimestorytimes 
          </div>
        </div>
        <div className="form1">
          <form onSubmit={onSubmit}>
            <br></br>
            <div className="heado">
              <b>Enter your Details</b>
            </div>
            <br></br>
            <br></br>
            <div className="f1">FirstName:</div>
            <input
              className="h1"
              type="text"
              placeholder="Enter FirstName"
              name="firstName"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f2">SecondName:</div>
            <input
              className="h2"
              type="text"
              placeholder="Enter SecondName"
              name="secondName"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f3">PhoneNo:</div>
            <input
              className="h3"
              type="text"
              placeholder="Enter PhoneNo"
              name="phoneNo"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f4">EmailId:</div>
            <input
              className="h4"
              type="text"
              placeholder="Enter EmailId"
              name="emailId"
             
            ></input>
            <br></br>
            <br></br>

            <div className="f5">Query:</div><br></br>

            <div className="h5">
              <textarea
                name="query"
                placeholder="Enter Query"
               
              ></textarea>
            </div>
            <br></br>
            <br></br>
            <button type="submit"  className="btr">
              <div className="bro">Submit response</div>
            </button>
          </form>
        </div>
        <div className="frq">
        <br></br>
        <div className='gap'>
        <div className='po2'><><b>FAQ</b></><br></br></div><br></br>
       1. How do I get started on the platform?<br></br>



2.How can I discover new stories to read?<br></br>


3.Can I interact with authors and other readers?<br></br>


4.Is there a way to save my favorite stories for later?<br></br></div>

        </div>
        <div className="footer"></div>
        <div className="pp1">
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="cop1">Copyright © 2023. All rights reserved</div>
        <div className="tc1">
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      
    
  );
});

export default Contact;
