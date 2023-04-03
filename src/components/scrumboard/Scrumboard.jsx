import React, { useState } from 'react';
import AddTask from './addtask/AddTask';
import Tasks from '../tasks/Tasks';
import { useStateContext } from '../ContextProvider';
import { useLocalStorage } from '../LocalStorage';
import "./scrumboard.css";
import ScrumboardHeader from './header/Header';


export default function Scrumboard() {
    const { fullName, projectType, projectName,
    } = useStateContext();
    const [weeklyTask, setWeeklyTask] = useLocalStorage("weeklyTask", []);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }



    return (
        <>
            <ScrumboardHeader data={{ projectType, projectName }} />

            <div className='scrumboard-container'>
                <div className='user-welcome'>
                    <div>
                        <p id="welcome">Hello
                            <span className='owner'>{fullName},</span> <br />
                            Welcome to your Scrumboard!
                        </p>
                    </div>

                    <div className='scrumboard-body'>
                        <p className='intro'> Break your project into smaller <span className='weekly_intro'>   weekly </span>   and  <span className="daily_intro">  daily </span> tasks to help you achieve them, faster!
                        </p>
                    </div>
                </div>


                <div className='tasks'>
                    <Tasks
                        weeklyTask={weeklyTask}
                        setWeeklyTask={setWeeklyTask}
                    />
                </div>

                <div className='addtask-button'>
                    <button
                        onClick={openModal}
                    >
                        ADD TASK
                    </button>
                </div>

                <div className='add-task'>
                    <AddTask
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        weeklyTask={weeklyTask}
                        setWeeklyTask={setWeeklyTask}
                    />
                </div>
            </div>

        </>
    )
}



