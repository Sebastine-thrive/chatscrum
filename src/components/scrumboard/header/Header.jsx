import React from 'react';
import './header.css';


const ScrumboardHeader = ({data}) => {

    const projectName = data.projectName;
    const projectType = data.projectType;
    return (
        <div className='header'>
            <h1> ScrumLife.</h1>
            <div className='project-heading '>
                <p>Project type: <span> {projectType} </span> </p>
                <p> Project Name: <span> {projectName} </span>  </p>

                {/* <div className='outlinks'>
                    <Link to='/signin'>
                        <button
                            className='sign_out'
                        >
                            Sign Out
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>

    )
}

export default ScrumboardHeader