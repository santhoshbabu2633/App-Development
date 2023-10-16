import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import Pivacy from './pages/Privacy';
import Home from './pages/Home';

import Genere from './pages/genere';
import Terms from './pages/Terms';
import Contact from './pages/Contact';


import Dboverview from './pages/dashboardf/dboverview';

import Admin from './pages/adminlogin';
import Love from './stories/love';
import TextEditor from './pages/TextEditor'; // Import the TextEditor component
import Myth from './stories/myth';

import Kid from './stories/kid';
import Nonfic from './stories/nonfic';
import Com from './stories/com';
import Crime from './stories/crime';
import Horror from './stories/horror';
import Life from './stories/life';
import StoryPage from './table/storytable';
import History from './stories/his';
import FeedPage from './table/feedbacktable';
import Adminc from './pages/admin';
import UserPage from './table/usertable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdash from './pages/dashboardf/userdash';
import LikedStories from './stories/liked';


function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
     
          
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/genere" element={<Genere/>} />
          <Route exact path="/privacy" element={<Pivacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/ls" element={<LikedStories />} />
          
          <Route exact path="/dbover" element={<Dboverview />} />
            
          <Route exact path="/userdash" element={<Userdash />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/love" element={<Love />} />
          <Route exact path="/lifestyle" element={<Life />} />
          <Route exact path="/horror" element={<Horror />} />
          <Route exact path="/crime" element={<Crime />} />
          <Route exact path="/comedy" element={<Com />} />
          <Route exact path="/non-fiction" element={<Nonfic />} />
          <Route exact path="/kids" element={<Kid />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/mythology" element={<Myth />} />
          <Route exact path="/table" element={<StoryPage />} />
          <Route exact path="/add" element={<TextEditor />} />
          <Route exact path="/table2" element={<FeedPage />} />
          <Route exact path="/adt" element={<Adminc />} />
          <Route exact path="/table3" element={<UserPage />} />
          
          
        </Routes>
      </Router>
    </div>


  );
}

export default App;
