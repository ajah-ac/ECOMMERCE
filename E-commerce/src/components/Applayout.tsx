import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Applayout = () => {
  return (
<>
<Navbar/>
<Outlet/>

</>
)
}

export default Applayout