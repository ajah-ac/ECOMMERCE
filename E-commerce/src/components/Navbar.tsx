import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthContext } from '../features/AuthenContext'
const Navbar = () => {
   
    const navigate = useNavigate()
    const { logout } = useAuthContext()
    const user = localStorage.getItem('user')
    if (!user) return
    const userInfor = JSON.parse(user)
    function handleLogout() {
        logout();
        navigate('/login', { replace: true })
    }
    return (
        <div className='flex shadow-md sticky z-10 bg-white top-0 justify-between px-8 py-5 text-lg font-bold'>
            <h1>Hi {userInfor.name}</h1>
            <nav className='flex justify-evenly gap-30'>
                <NavLink to='/home'> Home</NavLink>
                <NavLink to='/categories'> Categories</NavLink>
                <button 
                className='text-red-500'
                onClick={handleLogout}
                >Logout </button>

            </nav>
        </div>
    )
}

export default Navbar