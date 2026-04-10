import Categories from './Categories';
import banner from '../assets/shoppingcart.png'
const Home = () => {
  return (
    <>
    <div className=' bg-purple-100 h-[66vh] shadow-black  flex justify-between px-10 py-4 items-center
    overflow-hidden'>
        
        <h1 className='text-2xl font-bold '>New Arrivals Just for you</h1>
         <img className='max-w-full max-h-full object-contain  ' src={banner} alt="" /></div>
    
    <h1 className='text-2xl font-bold '>Categories</h1>
    <Categories/>
    </>
  )
}

export default Home