import React from 'react';
import "./home.css";

import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className='home'>
            <div className='heading'>
                <h1>
                    <span className='scrum'> SCRUM </span> <span className="life">LIFE</span>  </h1>
                <span className='quote'> <q> A goal without a plan is just a wish </q> </span> <span className='author'> -Antoine de Saint-Exupéry</span>
            </div>
            <div className='links'>
                <Link to='/signup'>
                    <button className='sign_up'> SIGN UP   </button>
                </Link>

                <Link to='/signin'>
                    <button className='sign_in'> SIGN IN   </button>
                </Link>

            </div>
        </div>
    )
}





