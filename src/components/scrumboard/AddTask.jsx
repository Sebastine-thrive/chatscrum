import React, { useState } from 'react';
import './scrumboard.css';

import { v4 as uuidv4 } from 'uuid';


// export class AddTask extends Component {
export default function AddTask({addTask, setTasks, modalIsOpen, setModalIsOpen}) {

    const [content, setContent] = useState('');


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
        e.preventDefault();
        setModalIsOpen(true);
        if (content.length < 1) {
            return;
        } else {
        addTask({id:uuidv4(), text :content});
        setContent('')
        }
    }

    
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


// export default AddTask