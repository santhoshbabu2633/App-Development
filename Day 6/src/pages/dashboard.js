import React from 'react'
import './dashboard.css';
import base from '../redux/store'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div div className='dasbg'>
      <div className="new"><p>Hi! {base.getState().email.email}...</p></div>
      <div className='dashbar'>
      <Link to="/">
                <img className='hic' src="home.png" alt="Home"></img>
            </Link>
      </div>
      
        <div className='bar'></div>
        <div className='cn1'><img className='like' src="like.png"></img><div className='tt'>Most Liked</div></div>
        <div className='cn2'><img className='view' src="view.png"></img><div className='tt'>Most viewed</div></div>
        <div className='cn3'><img className='view' src="down.png"></img><div className='tt'>Least Interested</div></div>
        <div className='cn4'><img className='star' src="star.png"></img><div className='tt'>highest rated</div></div>
        </div>
        
        
    )
}

export default Dashboard
