import React from 'react'
import { AuthProvider } from '../../../context/AuthProvider'
import { Outlet } from 'react-router-dom'

function RoleContextLayout() {
  return (
    <AuthProvider>
        <Outlet />
    </AuthProvider>
  )
}

export default RoleContextLayout;