import React, { Component } from 'react'

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
        // console.log(this.state.content)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            modalIsOpen: false
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
                // onClick={this.addInputRef}
                >ADD TASK</button>
            </div>
        )
    }
}

export default AddTask