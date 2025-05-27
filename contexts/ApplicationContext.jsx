import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {

    const [authUser, setAuthUser] = useState(false)

    const loginOrLogoutUser = (isAuth) => {
        setAuthUser(isAuth)
    }

    return (
        <ApplicationContext.Provider
            value={{
                loginOrLogoutUser,
                authUser
            }}>
            {children}
        </ApplicationContext.Provider>
    );
}