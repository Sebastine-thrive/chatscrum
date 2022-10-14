import React, { Component } from 'react';
import './scrumboard.css';

export class AddTask extends Component {
   state = {
     content: ""
   }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
        // this.addInputRef();
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            modalIsOpen: true
        })
        this.props.addTask(this.state)
        this.setState({
            content: ""
        })
    }

    render() {
    
        return (
            <div className='add-task'>
                <div id='modal' className={this.state.modalIsOpen ? "show" : "hidden"}>
                    <div className='header'>
                        <h3>Add a new task</h3>
                        <h2 id="close" onClick={() => this.closeModal()}>X</h2>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.content}
                        />
                        <button className='confirm'>CONFIRM</button>
                    </form>
                </div>

                <button className='add' onClick={() => this.openModal()}
                >ADD TASK</button>
            </div>
        )
    }
}

export default AddTask