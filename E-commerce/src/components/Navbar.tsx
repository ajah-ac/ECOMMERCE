import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../features/AuthenContext'
const Navbar = () => {
    type User={
        name:string,id:number
    }
    const user=localStorage.getItem('user')
    if(!user) return
    const userInfor=JSON.parse(user)
    console.log()
  return (
    <div className='flex justify-between px-8 py-4 text-lg font-bold'>
        <h1>Hi {userInfor.name}</h1>
        <nav className='flex justify-evenly gap-30'>

    <NavLink to='/categories'> Categories</NavLink>
    <NavLink to='/login'> Logout </NavLink>
                
        </nav>
    </div>
  )
}

export default Navbar