
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './na'; // Ensure correct path to Nav component
import Universe from './universe'; // Import Universe component
import Scientist from './scientist'; // Import Scientist component
import './App.css';
import './drop.css';
import Scr from '../public/nav'; // Ensure correct path to Scr component
import Home from './home.jsx'
import Game1 from './game1.jsx'
import Game2 from './game2.jsx'
import Game3 from './game3.jsx'
import Game4 from './game4.jsx'
import Projects from './projects.jsx'
import Agency from './agency.jsx'
import Gamehome from './gameHome.jsx'
import Astronaut from './astronaut.jsx';
import Satellite from './satellite.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add a home route */}
        <Route path="/universe" element={<Universe />} />
        <Route path="/scientist" element={<Scientist />} />
        <Route path="/gameHome" element={<Gamehome />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agency" element={<Agency/>} />
        <Route path="/astronaut" element={<Astronaut/>} />
        <Route path="/satellite" element={<Satellite/>} />

      

        {/* Add more routes if needed */}
        i
      </Routes>
    </Router>
  );
}

export default App;
