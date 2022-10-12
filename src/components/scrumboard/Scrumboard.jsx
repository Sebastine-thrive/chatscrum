import React, { Component } from 'react';
import "./scrumboard.css";

import Data from '../static/Data';
import AddTask from './AddTask';
import Tasks from '../tasks/Tasks';
import Users from '../users/Users';
import axios from 'axios';

export class Scrumboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            modalIsOpen: false,
            tasks: [],
        }
    }

    // componentDidMount() {
    //     axios.get("http://liveapi.chatscrum.com/scrum/api/scrumgoals/")
    //         .then(res => this.setState({
    //             tasks: res?.data
    //         }))
    // }

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
        console.log(this.state.tasks)
        return (
            <div className='scrumboard'>
                <nav>
                    <h1> Scrumboard</h1>
                    <div className='var'>
                        <p>User type: {Data.usertype} </p>
                        <p> Project Name: {Data.projectname} </p>
                    </div>
                </nav>
                <p id="info">Hello {Data.fullname}, Welcome to your Scrumboard!</p>

                <Tasks data={this.state.tasks} deleteTask={this.deleteTask}
                />

                <AddTask addTask={this.addTask}
                    tasks={this.state.tasks} />

                <Users />

            </div>
        )
    }
}

export default Scrumboard