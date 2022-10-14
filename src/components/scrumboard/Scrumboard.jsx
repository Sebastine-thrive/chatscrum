import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./scrumboard.css";

import Data from '../static/Data';
import AddTask from './AddTask';
import Tasks from '../tasks/Tasks';
// import Users from '../users/Users';
// import axios from 'axios';

export class Scrumboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            modalIsOpen: false,
            tasks: []
        }
    }

    handleLogOut = () => {
        localStorage.clear();
        // window.location.reload();
    }

    addTask = (task) => {
        task.id = Math.random().toString(36).slice(2, 9)
        let tasks = [...this.state.tasks, task]
        this.setState({
            tasks
        })
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => task.id !== id
        )
        this.setState({ tasks })
    }

    render() {

        const { fullName, userType, projectName } = this.props;
        console.log(this.state.tasks)
        return (
            <div className='scrumboard'>
                <nav>
                    <h1> Scrumboard</h1>
                    <div className='var'>
                        <p>User type: <span>{userType} </span> </p>
                        <p> Project Name: <span>{projectName} </span>  </p>
                        <Link to='/signin'>  <button className='sign_out'>Sign Out</button>
                        </Link>

                        <Link to='/'>  <button className='clear_out' onClick={this.handleLogOut}>Clear Account</button>
                        </Link>
                    </div>
                </nav >
                <p id="info">Hello  <span>{fullName}</span>, Welcome to your Scrumboard!</p>

                <Tasks data={this.state.tasks} deleteTask={this.deleteTask}
                />

                <AddTask addTask={this.addTask}
                    tasks={this.state.tasks} />

                {/* <Users /> */}

            </div >
        )
    }
}

export default Scrumboard