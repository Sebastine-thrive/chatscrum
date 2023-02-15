import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from './LocalStorage';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [fullName, setFullName] = useLocalStorage("fullname", "");

    const [email, setEmail] = useLocalStorage("email", "");

    const [password, setPassword] = useLocalStorage('password', "");

    const [projectName, setProjectName] = useLocalStorage("projectname", "");

    const [projectType, setProjectType] = useLocalStorage("projecttype", "home");

    return (
        <StateContext.Provider
            value={{
                user, setUser,
                fullName, setFullName,
                email, setEmail,
                password, setPassword,
                projectName, setProjectName,
                projectType, setProjectType
            }} >
            {children}</StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);