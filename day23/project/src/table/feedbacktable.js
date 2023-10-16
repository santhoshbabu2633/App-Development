import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faUser,faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'; 
import './storyPage.css';


function FeedPage() {
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch the list of stories when the component mounts
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios
      .get("http://localhost:8080/api/feed/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStories(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (fid) => {
    // Delete a story
    axios
      .delete(`http://localhost:8081/api/feed/delete/${fid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories after deletion
      })
      .catch((error) => console.error(error));
  };

  return (

    
    <div className="story-container">
     <div className="dbside1">
            <br></br>
            <Link to="/dbover">  <div className='hlo'><FontAwesomeIcon icon={faHouseUser} style={{color: "#ffffff",}} /></div><div className='ho'>Home</div></Link>
                  <Link to="/table"><div className="slo" ><FontAwesomeIcon icon={faBook} style={{color: "#ffffff",}} /></div><div className='ho'>Story</div></Link>
               <Link to="/table3"> <div className="ulo" > <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></div><div className='ho'>User</div> </Link>
                  <Link to="/table2" ><div className="qlo"><FontAwesomeIcon icon={faQuestionCircle} style={{color: "#ffffff",}} /></div> <div className='ho'>Feedback</div></Link>
                  <Link to="/home" ><div className="qlo"><FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} /></div> <div className='ho'>back</div></Link>

               
                </div>
      <div className="story-list">
        <h2>Feedback List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Phone No</th>
              <th>Email Id</th>
              <th>Query</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.fid}>
                <td>{s.firstname}</td>
                <td>{s.secondname}</td>
                <td>{s.phoneNo}</td>
                <td>{s.emailId}</td>
                <td>{s.query}</td>
                <td>
                 <div className='yei'> <button className="ddb" onClick={() => handleDelete(s.fid)}>Delete</button></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
      </div>
    </div>
  );
}

export default FeedPage;
