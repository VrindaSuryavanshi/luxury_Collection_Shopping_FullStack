import React from 'react'
import { Routes } from 'react-router-dom';
import AdminPanel from './../Admin/AdminPanel';

const AdminRouters = () => {
  return (
    <div>
            <Routes>
                <Route path='/' element={<AdminPanel/>}></Route>
            </Routes>
                </div>
  )
}

export default AdminRouters