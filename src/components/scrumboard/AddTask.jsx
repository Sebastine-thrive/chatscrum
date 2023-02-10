import React, { useState } from 'react';
import { useStateContext } from '../ContextProvider';
import { v4 as uuidv4 } from 'uuid';
import './scrumboard.css';


export default function AddTask({ modalIsOpen, setModalIsOpen }) {
    const { tasks, setTasks } = useStateContext();

    const [content, setContent] = useState('');


    const addTask = task => {
        const allTasks = [task, ...tasks,]
        setTasks(allTasks)
    }


    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleChange = (e) => {
        setContent(e.target.value)
    } 

    const handleSubmit = (e) => {
        if (content.length < 1) {
            e.preventDefault();
            return;
        } else {
            addTask({ id: uuidv4(), text: content });
            setContent('');
                    setModalIsOpen(true);

        }
        setModalIsOpen(true);
    }


    console.log(modalIsOpen)

    return (
        <div className={modalIsOpen ? "show" : "hidden"}>
            <div id='modal'>
                <div className='header'>
                    <h3>Add a new task</h3>
                    <h2 id="close" onClick={() => closeModal() }>X</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <input placeholder='write your task' type="text" onChange={handleChange} value={content} id='task-input'
                    /> <br />
                    <button className='confirm'>CONFIRM</button>
                </form>
            </div>
        </div>
    )
}


