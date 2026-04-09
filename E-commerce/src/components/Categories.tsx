import React from 'react'
import useFetchData from '../features/useFetchData';
import Navbar from './Navbar';
interface CategoType{
  id:number,name:string;image:string
}
const Categories = () => {
  const {data}=useFetchData<CategoType[]>('https://api.escuelajs.co/api/v1/categories')
  if(!data) {return <p>No data found</p>}
  return (<>
    <Navbar/>
    <ul className='flex flex-wrap space-y-2 space-x-4 justify-center  m-auto max-w-full'>
{data.map((category:CategoType)=><li
className='w-64 h-64'
 
key={category.id}>
<img src={category.image} className='w-full h-full' alt="image here" />
<h3>{category.name}</h3>

</li>)}



    </ul>
    </>
  )
}

export default Categories