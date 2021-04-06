import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth.js';
import authInitialState from './initialstate/authinitialState.js';

export const GlobalContext =  createContext({});

export const  GlobalProvider = ({children}) => {
    
    const [authState, authDispatch] = useReducer(auth,authInitialState);

    return (
        <GlobalContext.Provider 
            value={{
            authState,
            authDispatch
        }}>
            
        {children}
        </GlobalContext.Provider>
    );
};