import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from './LocalStorage';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null)

    const [fullName, setFullName] = useLocalStorage("fullname", "");

    const [email, setEmail] = useLocalStorage("email", "");

    const [password, setPassword] = useLocalStorage('password', "");

    const [projectName, setProjectName] = useLocalStorage("projectname", "");

    const [projectType, setProjectType] = useLocalStorage("projecttype", "home");

    const [tasks, setTasks] = 
    useLocalStorage("tasks", []);

    return (
        <StateContext.Provider
            value={{
                user, setUser,
                fullName, setFullName,
                email, setEmail,
                password, setPassword,
                projectName, setProjectName,
                projectType, setProjectType,
                tasks, setTasks
            }} >
            {children}</StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);