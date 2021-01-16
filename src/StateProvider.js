import React, { createContext, useContext, useReducer } from 'react'

// prepares the store
export const StateContext = createContext()

// wrap our app
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

// pull information from store
export const useStateValue = () => useContext(StateContext)
