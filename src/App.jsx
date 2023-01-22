import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Project from './pages/Project.jsx';
import Edu from './pages/Edu.jsx';


export default function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/experience' element={<Experience />}></Route>
        <Route exact path='/project' element={<Project />}></Route>
        <Route exact path='/edu' element={<Edu />}></Route>
      </Routes>
  );
}

