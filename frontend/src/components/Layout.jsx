import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
    <Header/>
    <div className="flex flex-1">
      <Sidebar/>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout