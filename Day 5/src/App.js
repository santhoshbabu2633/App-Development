import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './pages/Create';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Login" element={<Login/>} />
    <Route exact path="/Create" element={<Create />} />
    </Routes>
    </Router>
    
    </div>
  );
  }
export default App;
