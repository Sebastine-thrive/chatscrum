import React, { useState, useEffect } from 'react';
import { useStateContext } from '../ContextProvider';
import { v4 as uuidv4 } from 'uuid';
import './scrumboard.css';


export default function AddTask({ modalIsOpen, setModalIsOpen }) {
    const { tasks, setTasks } = useStateContext();

    const [content, setContent] = useState('');


    const addTask = task => {
        const allTasks = [task, ...tasks,]
        setTasks(allTasks)
        console.log(task.id)
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = (e) => {
        setModalIsOpen(true)
        e.preventDefault();
        if (content.length < 1) {
            return;
        } else {
            addTask({ id: uuidv4(), text: content });
            setContent('')
        }
    }


    console.log(modalIsOpen)

    return (
        <div className='add-task'>
            <div id='modal' className={modalIsOpen ? "show" : "hidden"}>
                <div className='header'>
                    <h3>Add a new task</h3>
                    <h2 id="close" onClick={closeModal}>X</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <input placeholder='write your task' type="text" onChange={handleChange} value={content} id='task-input'
                    /> <br />
                    <button className='confirm'>CONFIRM</button>
                </form>
            </div>

            <button className='add' onClick={openModal}
            >ADD TASK</button>
        </div>
    )
}


