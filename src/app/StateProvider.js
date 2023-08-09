"use client"
import React, { createContext, useContext, useReducer } from "react";

// Prep the store
export const StateContext = createContext();

// Wrap app
export const StateProvider = ({reducer, initialState, children }) => {

  return ( // Return the JSX element here
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull from store
export const useStateValue = () => useContext(StateContext);
