import React from 'react'
import './dboverview.css';
import { Link } from 'react-router-dom';
function Dboverview() {
    return (

        <div className='dbobg'>
         <div className='dbmainc'>
            <div className='code'>
            <br></br><br></br>
                Welcome Admin!!!<br></br>
                Go ahead sir<br>
                </br>
                Here you will access our app based on our app guidelines
                <br></br><br></br>
                Have a great one!!
                
            </div>
            <img className='admin' src="admin1.jpeg"></img>
         </div>
            <div className="dbside">
            <Link to="/Home">  <img className='homelogo' src="home.jpg"></img><b>Home</b></Link>
                  <Link to="/dbstats"><img className="statslogo" src="stats.png"></img><b>Stats</b></Link>
               <Link to="/dbuser"> <img className="userlogo" src="usericon.png"></img><b>User info</b> </Link>
                  <Link to="/dash" > <img className="querieslogo" src="queries.png"></img><b>Queries</b> </Link>
               
                </div>
               
            </div>
        
        
    )
}

export default Dboverview
