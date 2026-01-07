import React, { use, useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setLoggedInUser(userData);
      setUser(userData.tasks ? 'employee' : 'admin');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

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
      {!user ? <Login handleLogin={handleLogin} /> : user == 'admin' ? <AdminDashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUser={setUser} /> : <EmployeeDashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUser={setUser} />}
    </>
  )
}

export default App