import React, { useEffect, createContext } from 'react'
import {setLocalStorage, getLocalStorage} from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  return (
    <div>
      <AuthContext.Provider value={getLocalStorage()}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
