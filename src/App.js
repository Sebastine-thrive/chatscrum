import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useLocalStorage } from './components/LocalStorage';
import './App.css';

import { Home, Home2 } from "./components/home/Home";
import SignUp from './components/sign-up/Sign-up';
import SignIn from './components/sign-in/Sign-in';
import Scrumboard from './components/scrumboard/Scrumboard';
import { useStateContext } from './components/ContextProvider';


function App() {

  const { user, setUser } = useStateContext()

  // const [fullName, setFullName] = useLocalStorage("fullname", "");

  // const [email, setEmail] = useLocalStorage("email", "");

  // const [password, setPassword] = useLocalStorage('password', "");

  // const [projectName, setProjectName] = useLocalStorage("projectname", "");

  // const [userType, setUserType] = useLocalStorage("usertype", "developer");

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />


          <Route exact path='/signin' element={<SignIn />} />

          <Route exact path='/signup' element={<SignUp />} />

          
            <Route exact path='/scrumboard'
              element={
                <ProtectedRoute user={user}>
                  <Scrumboard />
                </ProtectedRoute>}
            />

            <Route exact path='/home2' element={<Home2 />} />


          </Routes >
      </div>
    </BrowserRouter >
  );
}

export default App;
