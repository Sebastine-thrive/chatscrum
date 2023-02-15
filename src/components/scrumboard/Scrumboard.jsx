import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Tasks from '../tasks/Tasks';
import { useStateContext } from '../ContextProvider';
import "./scrumboard.css";
import { useLocalStorage } from '../LocalStorage';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


export default function Scrumboard() {
    const { fullName, projectType, projectName,
    } = useStateContext();
    const [weeklyTask, setWeeklyTask] = useLocalStorage("weeklyTask", []);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [signOut, setSignOut] = useState(true)

    const openModal = () => {
        setModalIsOpen(true);
    }

    // const handleLogOut = () => {
    //     localStorage.clear();
    //     setEmail(null);
    //     setPassword(null);
    //     setUser(false);
    // }

    return (
        <div className='scrumboard'>
            {/* <div className={signOut ? 'overlay' : null}></div>             */}
            <nav>
                <h1> ScrumLife.</h1>
                <div className='var'>
                    <p>Project type: <span>{projectType} </span> </p>
                    <p> Project Name: <span>{projectName} </span>  </p>

                    <div className='outlinks'>
                        <Link to='/signin'>
                            <button
                                className='sign_out'
                            >
                                Sign Out
                            </button>
                        </Link>

                        {/* <Link to='/'>  <button className='clear_out' onClick={handleLogOut}>Clear Account</button>
                        </Link> */}
                    </div>
                </div>
            </nav >
            <p id="info">Hello  <span className='owner'>{fullName} ,</span> Welcome to your Scrumboard!</p>

            <div className='scrumboard_body'>
                <p className='intro'> Break your project into smaller <span className='weekly_intro'>   weekly </span>   and  <span className="daily_intro">  daily </span> tasks to help you achieve them, faster! </p>

                <div>
                    <Tasks
                        weeklyTask={weeklyTask}
                        setWeeklyTask={setWeeklyTask}
                    />
                </div>

                <div>
                    <AddTask
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        weeklyTask={weeklyTask}
                        setWeeklyTask={setWeeklyTask}
                    />
                </div>

                <button className='add' onClick={openModal}
                >ADD TASK</button>
            </div>

        </div >
    )
}


