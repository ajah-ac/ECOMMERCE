import React from 'react'
import { useAuthContext } from './features/AuthenContext'
import {Navigate,Outlet} from 'react-router-dom'
const Protected = () => {
  const {user}=useAuthContext()
  if(!user)
  {
    return <Navigate to='/login' replace/>
  }
  return <Outlet/>
}

export default Protected