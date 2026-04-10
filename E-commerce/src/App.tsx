import './output.css'
import {

createBrowserRouter,
createRoutesFromElements,
Route,RouterProvider
}from 'react-router-dom'
import Landing from './Landing'
import Login from './Login'
import Categories from './components/Categories'
import Protected from './Protected'

import Category from './components/Category'
import Home from './components/Home'
import Applayout from './components/Applayout'
 const router=createBrowserRouter(createRoutesFromElements(
 <>
  <Route path='/' element={<Landing/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 <Route element={<Protected/>}>
    <Route element={<Applayout/>}>
   <Route path='/home' element={<Home/>}/>
  <Route path='/categories' element={<Categories/>}/>
    <Route path='categories/:id' element={<Category/>}/>

  </Route>

 </Route>

 </>))
function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
