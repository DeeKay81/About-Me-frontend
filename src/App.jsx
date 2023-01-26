import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Project from './pages/Project.jsx';
import TicTacToeVid from './components/projects/videos/TicTacToeVid.jsx';
import CentipedeVid from './components/projects/videos/CentipedeVid.jsx';
import MySQLVid from './components/projects/videos/MySQLVid.jsx';
import Edu from './pages/Edu.jsx';


export default function App() {
  return (
      <Routes>
        <Route exact path='/DeeKay81/About-Me-frontend' element={<Home />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/experience' element={<Experience />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/project' element={<Project />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/project/tic-tac-toe-demo' element={<TicTacToeVid />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/project/centipede-demo' element={<CentipedeVid />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/project/mysql-demo' element={<MySQLVid />}></Route>
        <Route path='/DeeKay81/About-Me-frontend/edu' element={<Edu />}></Route>
      </Routes>
  );
}

