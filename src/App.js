import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './components/LocalStorage';
import './App.css';

import Home from "./components/home/Home";
import SignUp from './components/sign-up/Sign-up';
import SignIn from './components/sign-in/Sign-in';
import Scrumboard from './components/scrumboard/Scrumboard';


function App() {

  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage('password', "");



  // const [email, setEmail] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("emailnp");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });




  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("email", JSON.stringify(email));
  // }, [email]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn email={email} password={password} />} />
          <Route exact path='/signup' element={<SignUp email={email} setEmail={setEmail} password={password} setPassword ={setPassword} />} />
          <Route exact path='/scrumboard' element={<Scrumboard />} />

          </Routes >
      </div>
    </BrowserRouter >
  );
}

export default App;
