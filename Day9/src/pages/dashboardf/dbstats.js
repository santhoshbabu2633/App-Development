import React from 'react'
import './dbstats.css';
import { Link } from 'react-router-dom';
function Dbstats() {
    return (
        <div className='dbobg'>
         <div className='dbmainc'>
           
          <div className="viewc" > <img className='msv' src="view.png"></img><br></br> Most Viewd</div>
          <div className="likec"><img className='like' src="like.png"></img><br></br>Most Liked</div>
          <div className="view1c"><img className='msv1' src="view2.png"></img><br></br>Most Liked</div>
          <div className="like1c"><img className='like2' src="down.png"></img><br></br>Most Liked</div>
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

export default Dbstats
