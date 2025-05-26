import React, { createContext } from 'react';

export const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {

    const matheus = 'teste'

    return (
        <ApplicationContext.Provider
            value={{
                matheus
            }}>
            {children}
        </ApplicationContext.Provider>
    );
}