import { useState } from 'react'

import './output.css'
import {

createBrowserRouter,
createRoutesFromElements,
Route,RouterProvider
}from 'react-router-dom'
import Landing from './Landing'
import Login from './Login'
 const router=createBrowserRouter(createRoutesFromElements(
 <>
  <Route path='/' element={<Landing/>}></Route>
 <Route path='/login' element={<Login/>}></Route>

 </>))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
