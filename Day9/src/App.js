import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './pages/Create';
import Pivacy from './pages/Privacy';

import Home from './pages/Home';
import Dashboard from './pages/dashboardf/dashboard';
import Genere from './pages/genere';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Dbstats from './pages/dashboardf/dbstats';
import Dbuserdetails from './pages/dashboardf/dbuserdetails';
import Dboverview from './pages/dashboardf/dboverview';
import Dbadmins from './pages/dashboardf/dbadmins';
import Admin from './pages/adminlogin';
import Love from './stories/love';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="/Create" element={<Create />} />
    <Route exact path="/genere" element={<Genere/>}/>  
    <Route exact path="/privacy" element={<Pivacy/>}/>  
    <Route exact path="/terms" element={<Terms/>}/> 
    <Route exact path="/contact" element={<Contact/>}/> 
    <Route exact path="/dash" element={<Dashboard/>}/>
    <Route exact path="/dbstats" element={<Dbstats/>}/> 
    <Route exact path="/dbuser" element={<Dbuserdetails/>}/> 
    <Route exact path="/dbover" element={<Dboverview/>}/> 
    <Route exact path="/dbadmins" element={<Dbadmins/>}/> 
    <Route exact path="/admin" element={<Admin/>}/> 
    <Route exact path="/love" element={<Love/>}/> 
    

     </Routes>
    </Router>
    </div>
  );
  }
export default App;
