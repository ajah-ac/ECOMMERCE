import { useParams } from "react-router"
import useFetchData from "../features/useFetchData";
interface Product{
    id:number,
    title:string ;
    price:number;
    images:string[];
    description:string
}


const Products = () => {
    const {data,loading}=useFetchData<Product[] | null >('https://api.escuelajs.co/api/v1/products')
    const {id}=useParams()
if(!data) return <p>No product found</p>
if(!id) return <p>No product matching id</p>
const filter =data.find(product=>product.id===+id)

  return (
    <>
    {loading && <p> Loading...</p>}
{ filter?<div className="flex sm:space-x-4 items-center max-w-full justify-around" > 
<div className="w-full">    <img src={filter.images[0]} alt="" />
</div>    
<div className="self-start  w-full"><h1> {filter.title}</h1>
<h3 className="text-blue-400">${filter.price.toFixed(2)}</h3></div>
</div>:<p className="text-2xl">No product description found</p>

}


</>
  )
}

export default Products