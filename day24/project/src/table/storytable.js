import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faUser,faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'; 


function StoryPage() {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({
    storyid: null,
    storytitle: '',
    content: '',
    author: '',
    genre: '',
    storyphoto: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch the list of stories when the component mounts
    fetchStories();
  }, []);

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

  const handleCreate = () => {
    // Create a new story
    axios
      .post('http://localhost:8080/api/story/createstory', story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories
        clearForm();
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (selectedStory) => {
    // Set the form for editing
    setStory(selectedStory);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // Update the selected story
    axios
      .put(`http://localhost:8080/api/story/update/${story.storyid}`, story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories
        clearForm();
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (storyid) => {
    // Delete a story
    axios
      .delete(`http://localhost:8080/api/story/${storyid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories
      })
      .catch((error) => console.error(error));
  };

  const clearForm = () => {
    setStory({
      storyid: null,
      storytitle: '',
      content: '',
      author: '',
      genre: '',
      storyphoto: '',
    });
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setStory({ ...story, [name]: value });
  };

  const renderContentAsPlainText = (content) => {
    try {
      const contentObj = JSON.parse(content);
      let plainText = '';
      if (contentObj && contentObj.blocks) {
        plainText = contentObj.blocks.map((block) => block.text).join('\n');
      }
      return plainText;
    } catch (error) {
      console.error("Error parsing content:", error);
      return "Error rendering content.";
    }
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
        <h2>Story List</h2>
        <table>
          <thead>
            <tr>
              <th>Story Title</th>
              <th>Author</th>
              <th>Genre</th>
             <th>Content</th>
              <th>Story Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.storyid}>
                <td>{isEditing && story.storyid === s.storyid ? (
                  <input
                    type="text"
                    name="storytitle"
                    value={story.storytitle}
                    
                    onChange={handleFieldChange}
                  />
                ) : (
                  s.storytitle
                )}</td>
                <td>{isEditing && story.storyid === s.storyid ? (
                  <input
                    type="text"
                    name="author"
                    value={story.author}
                    onChange={handleFieldChange}
                  />
                ) : (
                  s.author
                )}</td>
                <td>{isEditing && story.storyid === s.storyid ? (
                  <input
                    type="text"
                    name="genre"
                    value={story.genre}
                    onChange={handleFieldChange}
                  />
                ) : (
                  s.genre
                )}</td>
                <td>{isEditing && story.storyid === s.storyid ? (
                  <textarea
                    name="content"
                    value={story.content}
                    style={{ width: '300px', height: '500px' }}
                    onChange={handleFieldChange}
                  ></textarea>
                ) : (
                  renderContentAsPlainText(s.content)
                )}</td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <>
                      <input
                        type="text"
                        name="storyphoto"
                        placeholder="Story Photo URL"
                        value={story.storyphoto}
                        onChange={handleFieldChange}
                      />
                      {story.storyphoto && (
                        <img
                          src={story.storyphoto}
                          alt="Story Photo"
                          width="100"
                          height="100"
                        />
                      )}
                    </>
                  ) : (
                    <img
                      src={s.storyphoto}
                      alt="Story Photo"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <>
                     <div className='yei'> <button  className='edbb' onClick={handleUpdate}>update</button>
                      <button className='ddb' onClick={() => setIsEditing(false)}>Cancel</button></div>
                    </>
                  ) : (
                    <>
                      <div className='yei'><button className=" edb" onClick={() => handleEdit(s)}>Edit</button>
                      <button  className="ddb " onClick={() => handleDelete(s.storyid)}>Delete</button></div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
          
        </div>
     
  );
}

export default StoryPage;
