import React from 'react'
import Header from '../Others/Header'
import AdminForm from '../Others/AdminForm'
import EmpDetails from '../Others/EmpDetails'


const AdminDashboard = ({ loggedInUser }) => {
  const admin = loggedInUser;
  return (
    <div className='h-screen w-full box-border bg-[#000000] flex flex-col justify-between'>
      <Header name={admin.firstName} />
      <AdminForm />
      <EmpDetails />
    </div>
  )
}

export default AdminDashboard
