import { Navigate ,useNavigate} from 'react-router-dom'
import shoppers from './assets/shoppers.png'
import { useAuthContext } from './features/AuthenContext'
const Landing = () => {
    const {user,loading}=useAuthContext();
    if(loading) return <p> Loading ....</p>
  const navigate=useNavigate()
  function handlelogin(){
navigate('/login',{replace:true})
  }
  if(user){
    return <Navigate to='/categories' replace/>
  }
  return (
    
    <div className='flex gap-6 h-screen bg-blue-100 justify-evenly items-center'>
           <img src={shoppers} alt="" />

      <div>
      <h1 className='lg:text-4xl text-2xl mb-8 xl:w-200'>Your one stop store for all your shopping needs</h1>
         <button  onClick={handlelogin} className='hover:bg-pink-500 hover:shadow-2xs bg-red-200 px-10 py-2 rounded-2xl mt-24'>Shop now</button>
</div>
    
    </div>
  )
}

export default Landing