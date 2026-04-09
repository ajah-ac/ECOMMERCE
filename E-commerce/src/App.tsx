import { useState } from 'react'
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
 const router=createBrowserRouter(createRoutesFromElements(
 <>
  <Route path='/' element={<Landing/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 <Route element={<Protected/>}>
  <Route path='/categories' element={<Categories/>}/>
    <Route path='categories/:id' element={<Category/>}/>

  

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
