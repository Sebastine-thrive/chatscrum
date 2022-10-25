import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useLocalStorage } from './components/LocalStorage';
import './App.css';

import { Home, Home2 } from "./components/home/Home";
import SignUp from './components/sign-up/Sign-up';
import SignIn from './components/sign-in/Sign-in';
import Scrumboard from './components/scrumboard/Scrumboard';


function App() {

  const [user, setUser] = useState(false);

  const [fullName, setFullName] = useLocalStorage("fullname", "");

  const [email, setEmail] = useLocalStorage("email", "");

  const [password, setPassword] = useLocalStorage('password', "");

  const [projectName, setProjectName] = useLocalStorage("projectname", "");

  const [userType, setUserType] = useLocalStorage("usertype", "developer");

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


          <Route exact path='/signin' element={<SignIn email={email} password={password} setUser={setUser} user={user} />} />

          <Route exact path='/signup' element={<SignUp email={email} setEmail={setEmail} password={password} setPassword={setPassword} setProjectName={setProjectName} setUserType={setUserType} setFullName={setFullName} fullName={fullName} userType={userType} projectName={projectName} setUser={setUser} user={user} />} />

          <>
            <Route exact path='/scrumboard'
              element={
                <ProtectedRoute user={user}>
                  <Scrumboard fullName={fullName} userType={userType} projectName={projectName} setEmail={setEmail} setPassword={setPassword} setUser={setUser} />
                 </ProtectedRoute> 
                } />
          
          </>
          <Route exact path='/home2' element={<Home2 />} />


        </Routes >
      </div>
    </BrowserRouter >
  );
}

export default App;
