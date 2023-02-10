import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Tasks from '../tasks/Tasks';
import { useStateContext } from '../ContextProvider';
import "./scrumboard.css";


export default function Scrumboard() {
    const { fullName, projectType, projectName, setEmail, setPassword, setUser, tasks, setTasks } = useStateContext();

    const [modalIsOpen, setModalIsOpen] = useState(null);


    const openModal = () => {
        setModalIsOpen(true);
    }

    const handleLogOut = () => {
        localStorage.clear();
        setEmail(null);
        setPassword(null);
        setUser(false);
    }

    return (
        <div className='scrumboard'>
            <nav>
                <h1> ScrumLife.</h1>
                <div className='var'>
                    <p>Project type: <span>{projectType} </span> </p>
                    <p> Project Name: <span>{projectName} </span>  </p>

                    <div className='outlinks'>
                        <Link to='/signin'>  <button className='sign_out'>Sign Out</button>
                        </Link>

                        <Link to='/'>  <button className='clear_out' onClick={handleLogOut}>Clear Account</button>
                        </Link>
                    </div>
                </div>
            </nav >
            <p id="info">Hello  <span className='owner'>{fullName} ,</span> Welcome to your Scrumboard!</p>

            <div>
                <p className='intro'> Break your project into smaller <span className='weekly_intro'>   weekly </span>   and  <span className="daily_intro">  daily </span> tasks to help you achieve them, faster! </p>

                <div>
                    <Tasks />
                </div>

                <div>
                    <AddTask
                        tasks={tasks} setTasks={setTasks} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                </div>

                <button className='add' onClick={openModal}
                >ADD TASK</button>
            </div>

        </div >
    )
}


