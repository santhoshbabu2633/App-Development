import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from 'react-rating-stars-component'; // Import the rating component
import base from '../redux/store';
import './myth.css';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'draft-js';
import Navbar from '../charts/navbar';

function Myth() {
  const [myth, setMythStories] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [dislikeCounts, setDislikeCounts] = useState({});
  const [userRatings, setUserRatings] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const axiosConfig = {
      headers,
    };

    axios
      .get('http://localhost:8080/api/story/byGenre/mythology', axiosConfig)
      .then((response) => {
        setMythStories(response.data);
        const initialLikeCounts = {};
        const initialDislikeCounts = {};
        response.data.forEach((story) => {
          initialLikeCounts[story.storyid] = story.likeCount;
          initialDislikeCounts[story.storyid] = story.dislikeCount;
        });
        setLikeCounts(initialLikeCounts);
        setDislikeCounts(initialDislikeCounts);
      })
      .catch((error) => {
        console.error('Error fetching love stories:', error);
      });
  }, [token,userRatings]);

  
  const handleLike = (storyId) => {
    axios.post(`http://localhost:8080/api/story/${storyId}/like`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setLikeCounts((prevCounts) => ({
          ...prevCounts,
          [storyId]: prevCounts[storyId] + 1,
        }));
      })
      .catch((error) => {
        console.error('Error liking story:', error);
      });
  };

  const handleDislike = (storyId) => {
    axios.post(`http://localhost:8080/api/story/${storyId}/dislike`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setDislikeCounts((prevCounts) => ({
          ...prevCounts,
          [storyId]: prevCounts[storyId] + 1,
        }));
      })
      .catch((error) => {
        console.error('Error disliking story:', error);
      });
  };

  const handleRating = (storyId, rating) => {
    axios.post(`http://localhost:8080/api/story/${storyId}/rate?rating=${rating}`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setUserRatings((prevRatings) => ({
          ...prevRatings,
          [storyId]: rating,
        }));
      })
      .catch((error) => {
        console.error('Error rating story:', error);
      });
  };

  const renderEditorContent = (content) => {
    try {
      const contentState = convertFromRaw(JSON.parse(content));
      const editorState = EditorState.createWithContent(contentState);
      return (
        <Editor
          editorState={editorState}
          readOnly={true}
        />
      );
    } catch (error) {
      console.error("Error parsing content:", error);
      return <div>Error rendering content.</div>;
    }
  };
  return (
    <div>
      <div className="nonbg">
      <Navbar/>

        <div className="nt1">
        Mythological Stories
        </div>
        <hr />
        <ul>
          {myth.map((story) => (
            <ul key={story.storyid}>
            <div className='title'>{story.storytitle}</div>
              <p>- {story.author}</p>

              <div className="ys1">
                <img className="ys11" src={story.storyphoto} alt="Story" />
              </div>

              <div className="ms1">   {renderEditorContent(story.content)}</div>

              <div className="story-actions">
                <button
                  className="like-button"
                  onClick={() => handleLike(story.storyid)}
                >
                  <img className='like' src="likeo.png" alt="Like" />
                  {likeCounts[story.storyid]}
                </button>
                <button
                  className="dislike-button"
                  onClick={() => handleDislike(story.storyid)}
                >
                  <img className='dislike' src="dliko.png" alt="Dislike" />
                  {dislikeCounts[story.storyid]}
                </button>
                <div className='star'>
                
                <Rating
                  value={userRatings[story.storyid] || 0}
                  count={5}
                  onChange={(rating) => handleRating(story.storyid, rating)}
                  size={24}
                  activeColor="#ffd700"
                />
                 <div className='red'> Average Rating: {story.averageRating.toFixed(2)}</div>
              </div>
              </div>

              <hr />
            </ul>
          ))}
        </ul>
      </div>

      <div className="footer"></div>
      <div className="pp">
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className="cop">Copyright © 2023. All rights reserved</div>
      <div className="tc">
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </div>
  );
}

export default Myth;
