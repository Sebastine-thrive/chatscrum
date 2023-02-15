import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './scrumboard.css';


export default function AddTask(props) {

    const { weeklyTask, setWeeklyTask, modalIsOpen, setModalIsOpen } = props;
    const [content, setContent] = useState('');
    const inputRef = useRef(null);

    const addTask = task => {
        const allTasks = [task, ...weeklyTask,]
        setWeeklyTask(allTasks)
    }
   
    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
        if (content.length < 1) {
            e.preventDefault();
            return;
        } else {
            addTask({ id: uuidv4(), text: content });
            setContent('');
            setModalIsOpen(true);
        }
        inputRef.current.focus();

    }

    return (
        <div className={modalIsOpen ? "show" : "hidden"}>
            <div id='modal'>
                <div className='header'>
                    <h3>Add a new task</h3>
                    <h2 id="close" onClick={() => closeModal()}>X</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='write your task'
                        type="text"
                        onChange={handleChange}
                        value={content}
                        id='task-input'
                        ref={inputRef}
                    /> <br />
                    <button type='submit' className='confirm'>CONFIRM</button>
                </form>
            </div>
        </div>
    )
}


