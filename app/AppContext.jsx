/** @format */

'use client'

import { Children, createContext, useContext, useState } from 'react'
import { SidebarNav } from './SidebarNav'
import { useReducer } from 'react'

export const appContext = createContext()
const initialState = {
  cart: ['laptop', 't-shirt'],
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const product = action.payload
      return { ...state, cart: [...state.cart, product] }
    }
    default:
      return state
  }
}

export function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <appContext.Provider value={value}>{children}</appContext.Provider>
}
