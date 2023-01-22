import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Project from './pages/Project.jsx';
import Edu from './pages/Edu.jsx';


export default function App() {
  return (
      <Routes>
        <Route exact path='/DeeKay81/About-Me-frontend' element={<Home />}></Route>
        <Route exact path='/DeeKay81/About-Me-frontend/experience' element={<Experience />}></Route>
        <Route exact path='/DeeKay81/About-Me-frontend/project' element={<Project />}></Route>
        <Route exact path='/DeeKay81/About-Me-frontend/edu' element={<Edu />}></Route>
      </Routes>
  );
}

