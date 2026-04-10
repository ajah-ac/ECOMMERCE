import useFetchData from '../features/useFetchData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
type Products={
id:string,
title:string;
price:string;
images:string[];
category:{
    id:number,
    name:string
}

}

function Category() {
    const {id}=useParams()
    const navigate=useNavigate()
      const {data,loading}=useFetchData<Products[] | null>('https://api.escuelajs.co/api/v1/products')
    
    if(loading){
        return <p>Loading...</p>
    } 
    if(!data){
        return <> Not products found in this category</>
    }
    if(!id){
        return <p>Invalid Category</p>    }
const filter=data.filter(product=>product.category.id===+id)

      return (
        <>
  

      <h2 className="text-xl font-bold text-center my-4">
        Products in Category {id}
      </h2>
{filter.length<=0 && <p>no products found</p>}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {filter.map((product) => (
          <div
            key={product.id}
            onClick={()=>navigate(`/products/${product.id}`)}
            className="w-64 bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-40 w-full object-cover mb-2"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-blue-500">${product.price}</p>
          </div>
        ))}
      </div>
      </>
  )
}

export default Category