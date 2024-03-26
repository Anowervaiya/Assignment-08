import React from 'react'
import { NavbarWithMegaMenu } from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
      <Outlet></Outlet>
      
    </div>
  )
}

export default Root