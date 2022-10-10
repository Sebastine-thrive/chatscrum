import React from 'react';
import "./home.css";

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO <br /><span className='title'> CHATSCRUM  </span> </h1>
            <div className='links'>
                <Link to='/signup'>  <button className='sign_up'> SIGN UP   </button> </Link>
                <Link to='/signup'>  <button className='sign_in'> SIGN IN   </button> </Link>

            </div>
            <div className='image'></div>
           
        </div>
    )
}
