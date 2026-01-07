import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const savedData = useContext(AuthContext);
  const admins = savedData.admins;
  const employees = savedData.employees;

  const handleLogin = (email, password) => {
    if (admins.find(admin => email == admin.email && password == admin.password)) {
      setUser('admin')
      setLoggedInUser(admins.find(admin => email == admin.email && password == admin.password))
    } else if (employees.find(employee => email == employee.email && password == employee.password)) {
      setUser('employee')
      setLoggedInUser(employees.find(employee => email == employee.email && password == employee.password))
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user == 'admin' ? <AdminDashboard loggedInUser={loggedInUser} /> : <EmployeeDashboard loggedInUser={loggedInUser} />}
    </>
  )
}

export default App