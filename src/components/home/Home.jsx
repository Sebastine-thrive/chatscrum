import React from 'react';
import image from '../../assets/images/scrum1x.svg'
import { Link } from 'react-router-dom';
import Header from './header/Header';
import "./home.css";


export function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='body'>
                <div className='intro'>
                    <h1>
                        <span> Create orderliness, </span> <br />
                        <span> be mindful, </span> <br />
                        <span> achieve goals.</span>
                    </h1>

                    <p>
                        <span className='quote'>
                            <q> A goal without a plan is just a wish
                            </q>
                        </span>
                        <br />
                        <span className='author'> -Antoine de Saint-Exupéry</span>
                    </p>

                    <div className='links'>
                        <Link to='/signup'>
                            <button className='sign_up'> SIGN UP   </button>
                        </Link>

                        <Link to='/signin'>
                            <p className='sign_in'>
                                SIGN IN
                            </p>
                        </Link>

                    </div>
                </div>

                <div className='intro-image'>
                    <img src={image}
                        alt="scrum-in-use image"
                        width='600px'
                        height='600px'

                    />
                </div>

            </div>
        </div >
    )
}





