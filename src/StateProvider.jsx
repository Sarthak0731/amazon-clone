import React, { useReducer } from 'react';
import { StateContext } from './StateContext';
import useStateValue from './useStateValue'; // Importing the custom hook 

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);