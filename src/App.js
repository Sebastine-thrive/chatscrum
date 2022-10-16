import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './components/LocalStorage';
import './App.css';

import {Home, Home2} from "./components/home/Home";
import SignUp from './components/sign-up/Sign-up';
import SignIn from './components/sign-in/Sign-in';
import Scrumboard from './components/scrumboard/Scrumboard';


function App() {

  const [fullName, setFullName] = useLocalStorage("fullname", "");

  const [email, setEmail] = useLocalStorage("email", "");

  const [password, setPassword] = useLocalStorage('password', "");

  const [projectName, setProjectName] = useLocalStorage("projectname", "");

  const [userType, setUserType] = useLocalStorage("usertype", "developer");



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />


          <Route exact path='/signin' element={<SignIn email={email} password={password} />} />

          <Route exact path='/signup' element={<SignUp email={email} setEmail={setEmail} password={password} setPassword ={setPassword} setProjectName={setProjectName}  setUserType={setUserType} setFullName={setFullName} fullName={fullName} userType={userType} projectName={projectName} />} />

          <Route exact path='/scrumboard' element={<Scrumboard fullName={fullName} userType={userType} projectName={projectName} />} />

          <Route exact path='/home2' element={<Home2 />} />


          </Routes >
      </div>
    </BrowserRouter >
  );
}

export default App;
