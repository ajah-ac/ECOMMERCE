import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthContext } from '../features/AuthenContext'
const Navbar = () => {
    type User={
        name:string,id:number
    }
    const navigate=useNavigate()
    const {logout}=useAuthContext()
    const user=localStorage.getItem('user')
    if(!user) return
    const userInfor=JSON.parse(user)
    function handleLogout(){
logout();
navigate ('/login', {replace:true})
    }
  return (
    <div className='flex justify-between px-8 py-4 text-lg font-bold'>
        <h1>Hi {userInfor.name}</h1>
        <nav className='flex justify-evenly gap-30'>

    <NavLink to='/categories'> Categories</NavLink>
<button onClick={handleLogout}>Logout </button>
                
        </nav>
    </div>
  )
}

export default Navbar