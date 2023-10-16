import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LikedStories({ uid }) {
  const [likedStories, setLikedStories] = useState([]);
  const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage.
  

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    axios
      .get(`http://localhost:8080/api/story/user/${uid}/liked-stories`, { headers })
      .then((response) => {
        setLikedStories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching liked stories:', error);
      });
  }, [uid, token]);

  return (
    <div>
      <h2>Your Liked Stories</h2>
      <ul>
        {likedStories.map((story) => (
          <li key={story.storyid}>Story ID: {story.storyid}</li>
        ))}
      </ul>
    </div>
  );
}

export default LikedStories;
