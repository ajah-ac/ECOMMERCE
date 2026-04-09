import { useAuthContext } from './features/AuthenContext'
import {Navigate,Outlet} from 'react-router-dom'
const Protected = () => {
  const {user,loading}=useAuthContext()
  if(loading){
    return<p>Loading...</p>
  }
  if(!user)
  {
    return <Navigate to='/login' replace/>
  }
  return <Outlet/>
}

export default Protected