
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './dboverview.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faUser,faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'; 


function Dboverview() {
    const [stories, setStories] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [users, setUsers] = useState([]);
    const [chartData, setChartData] = useState({});
    const token = localStorage.getItem('token');
    useEffect(() => {
     
        fetchStories();
      }, []);

      useEffect(() => {
       
        fetchfeedbacks();
      }, []);

      useEffect(() => {
      
        fetchUsers();
      }, []);
      
      const updateChartData = () => {
        setChartData({
          labels: ['Stories', 'Feedbacks', 'Users'],
          datasets: [
            {
              label: 'Counts',
              data: [stories.length, feedbacks.length, users.length],
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        });
      };
    const fetchStories = () => {
        axios
          .get("http://localhost:8080/api/story", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setStories(response.data))
          .catch((error) => console.error(error));
      };

      const fetchfeedbacks = () => {
        axios
          .get("http://localhost:8080/api/feed/getall", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setFeedbacks(response.data))
          .catch((error) => console.error(error));
      };

      
      const fetchUsers = () => {
        axios
          .get("http://localhost:8080/api/getall", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setUsers(response.data))
          .catch((error) => console.error(error));
      };
    return (

        <div className='dbobg'>
         <div className='dbmainc'>
            <div className='code'>
            <br></br><br></br>
                <div className='cpr'><br></br><div className='ns'>Number of Stories</div> {stories.length}
               </div>
                <div className='cpr1'><br></br><div className='nf'> Number of Feedbacks </div>{feedbacks.length}</div>
                <div className='cpr2' ><br></br><div className='nu'>Number of Users</div>{users.length}</div>
                <img className='what' src="admin1.jpeg"></img>
            </div>
            
         </div>
            <div className="dbside">
            <br></br>
            
            <Link to="/dbover">  <div className='hlo'><FontAwesomeIcon icon={faHouseUser} style={{color: "#ffffff",}} /></div><div className='ho'>Home</div></Link>
                  <Link to="/table"><div className="slo" ><FontAwesomeIcon icon={faBook} style={{color: "#ffffff",}} /></div><div className='ho'>Story</div></Link>
               <Link to="/table3"> <div className="ulo" > <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></div><div className='ho'>User</div> </Link>
                  <Link to="/table2" ><div className="qlo"><FontAwesomeIcon icon={faQuestionCircle} style={{color: "#ffffff",}} /></div> <div className='ho'>Feedback</div></Link>
                  <Link to="/home" ><div className="qlo"><FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} /></div> <div className='ho'>back</div></Link>
                  
              
                </div>
               
            </div>
        
        
    )
}

export default Dboverview
