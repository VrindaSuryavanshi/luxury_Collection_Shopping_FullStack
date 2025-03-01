import React from 'react'
import { Route , Routes } from 'react-router-dom';
import AdminPanel from './../Admin/AdminPannel';
import DrawerMenu from './../Admin/components/DrawerMenu';

const AdminRouters = () => {
  return (
    <div>
            <Routes>
                <Route path='/*' element={<AdminPannel/>}></Route>
            </Routes>
                </div>
  )
}

export default AdminRouters