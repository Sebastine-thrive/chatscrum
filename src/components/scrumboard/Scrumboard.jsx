import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./scrumboard.css";

import AddTask from './AddTask';
import Tasks from '../tasks/Tasks';
import { useLocalStorage } from '../LocalStorage';


export default function Scrumboard({ fullName, userType, projectName, setEmail, setPassword, setUser }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tasks, setTasks] =
     useLocalStorage('tasks', []);


    const handleLogOut = () => {
        localStorage.clear();
        setEmail(null);
        setPassword(null);
        setUser(false);

    }

    const addTask = task => {
        const allTasks = [task, ...tasks,]
        setTasks(allTasks)
        console.log(task.id)
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter(task => task.id !== id
        )
        setTasks({ remainingTasks })
    }

    console.log(tasks)
    return (
        <div className='scrumboard'>
            <nav>
                <h1> Scrumlife</h1>
                <div className='var'>
                    <p>User type: <span>{userType} </span> </p>
                    <p> Project Name: <span>{projectName} </span>  </p>

                    <div className='outlinks'>
                        <Link to='/signin'>  <button className='sign_out'>Sign Out</button>
                        </Link>

                        <Link to='/'>  <button className='clear_out' onClick={handleLogOut}>Clear Account</button>
                        </Link>
                    </div>
                </div>
            </nav >
            <p id="info">Hello  <span>{fullName}</span>, Welcome to your Scrumboard!</p>

            <div>
                <Tasks data={tasks} deleteTask={deleteTask}
                />
            </div>

            <div>
                <AddTask
                    tasks={tasks} setTasks={setTasks} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} addTask={addTask} />
            </div>
        </div >
    )
}


