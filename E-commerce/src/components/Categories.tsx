import useFetchData from '../features/useFetchData';
import Navbar from './Navbar';
import { useNavigate,  } from 'react-router-dom';

export interface CategoType{
  id:number,
  name:string;
  image:string
}

const Categories = () => {
const navigate=useNavigate()
  const {data,loading}=useFetchData<CategoType[]>('https://api.escuelajs.co/api/v1/categories')
   if(loading) {return <p>Loading...</p>}

  if(!data) {return <p>No data found</p>}
 
  return (<>
    <Navbar/>
    <ul  
    className='flex flex-wrap h justify-center gap-6 p-4'>
{data.map((category:CategoType)=><li
 className='w-64 h-64 bg-white shadow-md rounded-lg pb-4 px-4 pt-1'
onClick={()=>navigate(`/categories/${category.id}`)}
key={category.id}>
<img src={category.image} alt="" className='h-48 w-full object-cover mb-2'/>
<h3>{category.name}</h3>

</li>)}



    </ul>
    </>
  )
}

export default Categories