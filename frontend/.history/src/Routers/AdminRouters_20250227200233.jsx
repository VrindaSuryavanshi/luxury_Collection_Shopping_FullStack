import React from 'react'
import { Route , Routes } from 'react-router-dom';
// import AdminPanel from './../Admin/AdminPanel';
import AdminDashboard from './../Admin/components/Dashboard';

const AdminRouters = () => {
  return (
    <div>
            <Routes>
                <Route path='/*' element={<AdminDashboard/>}></Route>
            </Routes>
                </div>
  )
}

export default AdminRouters