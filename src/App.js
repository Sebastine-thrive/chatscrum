import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/home/Home";
import SignUp from './components/sign-up/Sign-up';
import SignIn from './components/sign-in/Sign-in';
import Scrumboard from './components/scrumboard/Scrumboard';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/scrumboard' element={<Scrumboard />} />

          </Routes >
      </div>
    </BrowserRouter >
  );
}

export default App;
