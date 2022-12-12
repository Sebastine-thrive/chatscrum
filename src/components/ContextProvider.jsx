import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from './LocalStorage';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const [fullName, setFullName] = useLocalStorage("fullname", "");

    const [email, setEmail] = useLocalStorage("email", "");

    const [password, setPassword] = useLocalStorage('password', "");

    const [projectName, setProjectName] = useLocalStorage("projectname", "");

    const [userType, setUserType] = useLocalStorage("usertype", "developer");

    const [tasks, setTasks] =
        useState([]);

    return (
        <StateContext.Provider
            value={{
                user, setUser,
                fullName, setFullName,
                email, setEmail,
                password, setPassword,
                projectName, setProjectName,
                userType, setUserType,
                tasks, setTasks
            }} >
            {children}</StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);