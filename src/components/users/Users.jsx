import React, { Component } from 'react';
import "./users.css";

import axios from 'axios';


export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // loading: true,
            isUserModalOpen: true,
            users: [],
        }
        // this.toggleModal = this.toggleModal.bind(this);

    }

    componentDidMount() {
        axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
            .then(res => this.setState({
                users: res?.data
            }))
    }

    toggleModal = () => {
        if (this.state.isUserModalOpen) {
            this.setState({
                isUserModalOpen: false
            })
        } else {
            this.setState({
                isUserModalOpen: true
            })
        }
    }


    render() {
        console.log(this.state.isUserModalOpen)

        return (
            <div className='users_main'>
                <h4 onClick={() => this.toggleModal()}>Connected Users</h4>
                {this.state.isUserModalOpen && (
                <div id='user_list'>
                    {this.state?.users?.map(({ nickname, id }) => {
                        return (
                            <div className='users' key={`${id}`}>
                                <span><i className='fas fa-user'></i></span>
                                {nickname}
                            </div>
                        )
                    }
                    )}
                </div>
                )}
            </div>
        )
    }
}

export default Users;