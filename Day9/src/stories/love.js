import React, { useState } from 'react';
import './love.css';
import base from '../redux/store';
import { Link } from 'react-router-dom';

function Love() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLikeClick = () => {
    
    setLikeCount(likeCount + 1);
  };
  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className='databg'>
      <div className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/">Story Review</Link> 
        <Link to="/Genere">Genre </Link>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/">Sign In</Link> 
        <Link to="/add">Add Story+</Link>
        <img className='mba' src="ml.png" alt="Logo" /> 
        <div className="cred">
          <img className='logo' src="ic.png" alt="Logo" /> 
          <div className='fetch'>
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <div className='per'>
        <img className='imageof' src="log.webp" alt="Story Image" /><br></br>
       
        <img className='lii' src="likeo.png" alt="Like Icon" onClick={handleLikeClick} />
        <img className='lii2' src="dliko.png" alt="Dislike Icon" onClick={handleDislikeClick} />
        <div className='like-count'>Likes: {likeCount}</div>
        <div className='dislike-count'>Dislikes: {dislikeCount}</div> 
        <p>
          <div className='authname'>Author: Harvard</div>
          <div className='gen'>Genre: Love</div></p>
        <div className='data'>
        
<p>Love Beyond Time</p>

Once upon a time in a quaint little town, there lived a young woman named Sarah. She was known for her kindness, her warm smile, and her love for history. Sarah worked at the local museum, where she spent her days surrounded by relics of the past.

One sunny afternoon, as Sarah was cataloging a new collection of artifacts, she came across a beautifully aged love letter hidden within an old book. The letter was written by a soldier named John during World War II to his sweetheart, Emily. The words were filled with love, longing, and the hope of returning home safely to be with his beloved.

Touched by the heartfelt words, Sarah felt an inexplicable connection to the love story of John and Emily. She decided to embark on a quest to find out what happened to them. Sarah began her research, pouring through dusty records and speaking with elderly townsfolk who might remember.

Through her dedication, Sarah discovered that John and Emily had indeed married after the war, built a life together, and had children and grandchildren. They had shared a love that had endured through the years and had inspired their entire community.

Intrigued by their story, Sarah continued to visit John and Emily's descendants, hearing tales of their enduring love and the legacy they had left behind. As she listened to their stories, Sarah couldn't help but be captivated by the idea of a love that transcended time.

One evening, as Sarah sat by the fireplace, reflecting on the love story she had uncovered, she felt a presence beside her. It was a photograph of John and Emily, taken on their wedding day, that had mysteriously fallen from the shelf. Sarah smiled as she picked up the photograph, feeling a warmth in her heart.

From that day on, Sarah knew that love was not bound by the constraints of time or age. It lived on in the memories, stories, and hearts of those who had experienced it. Sarah continued her work at the museum, cherishing the love letter and the love story that had changed her life forever.

And so, in the quiet town, the love story of John and Emily lived on through the generations, reminding everyone that love was a timeless and enduring force.

That's the love story for you. I hope you enjoyed it!
-----------------------------------------------------------

        
        </div>
        
      </div>
      
      <div className="footer">
        <div className="pp">
        <Link to="/privacy">  Privacy Policy</Link></div>
        <div className="cop">Copyright © 2023. All rights reserved</div>
        <div className='tc' ><Link to="/terms"> Terms&Conditions</Link></div>
      </div>
    </div>
  );
}

export default Love;
