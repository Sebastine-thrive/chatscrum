import React from 'react';
import "./home.css";

import { Link } from 'react-router-dom';

export  function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO <br /><span className='title'> SCRUMLIFE </span> 
                <span className='quote'> <q> A goal without a plan is just a wish </q> </span> <span className='author'> -Antoine de Saint-Exupéry</span></h1>
            <div className='links'>
                <Link to='/signup'>  <button className='sign_up'> SIGN UP   </button> </Link>
                <Link to='/signin'>  <button className='sign_in'> SIGN IN   </button> </Link>

            </div>
            <div className='image'></div>
           
        </div>
    )
}


export  function Home2() {
    return (
        <div className='home'>
            <h1>WELCOME TO <br /><span className='title'> CHATSCRUM  </span> </h1>
            <div className='links'>
                <Link to='/signup'>  <button className='sign_up'> SIGN UP   </button> </Link>
                {/* <Link to='/signin'>  <button className='sign_in'> SIGN IN   </button> </Link> */}

            </div>
            <div className='image'></div>

        </div>
    )
}


