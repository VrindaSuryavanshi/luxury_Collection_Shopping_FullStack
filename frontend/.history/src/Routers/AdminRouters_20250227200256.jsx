import React from 'react'
import { Route , Routes } from 'react-router-dom';
import AdminPanel from './../Admin/AdminPanel';

const AdminRouters = () => {
  return (
    <div>
            <Routes>
                <Route path='/admin' element={<AdminPanel/>}></Route>
            </Routes>
                </div>
  )
}

export default AdminRouters