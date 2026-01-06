import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState('')

  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
    } else if (email == 'employee@gmail.com' && password == '123') {
      setUser('employee')
    } else {
      alert('Invalid Credentials')
    }
  }

  const data = useContext(AuthContext)
  console.log(data)


  return (
    <div >

      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

    </div>
  )
}

export default App
