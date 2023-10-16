import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import './TextEditor.css';
import base from '../redux/store';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../charts/navbar";

function TextEditor() {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [storyImageURL, setStoryImageURL] = useState("");
  const [storytitle, setStoryTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleImageURLChange = (e) => {
    setStoryImageURL(e.target.value);
  };

  const onSaveContent = () => {
    const contentState = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));

    const token = localStorage.getItem('token');

    const postData = {
      storytitle,
      content,
      storyphoto: storyImageURL,
      author,
      genre,
    };

    axios
      .post(
        "http://localhost:8080/api/story/createstory",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setEditorState(EditorState.createEmpty());
        setStoryImageURL("");
        setStoryTitle("");
        setAuthor("");
        setGenre("");

        if (genre.toLowerCase() === "horror") {
          navigate("/horror");
        } else if (genre.toLowerCase() === "crime") {
          navigate("/crime");
        } else if (genre.toLowerCase() === "love") {
          navigate("/love");
        }
        else if (genre.toLowerCase() === "lifestyle") {
          navigate("/lifestyle");
        } else if (genre.toLowerCase() === "comedy") {
          navigate("/comedy");
        } else if (genre.toLowerCase() === "non-fiction") {
          navigate("/non-fiction");
        } else if (genre.toLowerCase() === "kids") {
          navigate("/kids");
        } else if (genre.toLowerCase() === "history") {
          navigate("/history");
        } else if (genre.toLowerCase() === "mythology") {
          navigate("/mythology");
        }
      })
      .catch((error) => {
        console.error("Error saving content:", error);
        setErrorMessage("Error saving content. Please try again.");
      });
  };

  return (
    <div className="overall">
    <Navbar/>
      <div className="editor">
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div>
          <input
            className="rdw-image-modal-url-input"
            name="storyImageURL"
            value={storyImageURL}
            onChange={handleImageURLChange}
            placeholder="Enter Image URL"
          />
          <button className="bts" onClick={onSaveContent}>Save Content</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <form>
        <div className="ck">
          <input
            className="ck11"
            type="text"
            name="storytitle"
            value={storytitle}
            onChange={(e) => setStoryTitle(e.target.value)}
            placeholder="Story Title"
          />
          <input
            className="ck1"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <input
            className="ck1"
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
          />
        </div>
      </form>

      <div className="footer"></div>
      <div className="pp">
    <Link to="/privacy">  Privacy Policy</Link>
      </div>
      <div className="cop">
        Copyright © 2023.All rights reserved
      </div>
      <div className='tc'>
      <Link to="/terms"> Terms&Conditions</Link>
      </div>
      
    </div>
  );
}

export default TextEditor;
