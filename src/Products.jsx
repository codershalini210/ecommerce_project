import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data'
import {Link} from "react-router-dom"
import Product_image_gallery from './Product_image_gallery'
import AddtoCart from './AddtoCart'
export default function Products() {
 let category_name = useParams().category_name
 console.log(category_name)
 let filtered_products = []
 if(category_name!=undefined)
 {
  filtered_products = products.filter((p)=>p.category == category_name)

 }
 else
 {
    filtered_products = products
 }
  let products_ui = filtered_products.map((product)=> {
return <div className='flex flex-col gap-1 w-60 text-center align-middle content-center'>
   
   {/* <Product_image_gallery imgs={product.images}></Product_image_gallery> 
   <hr />*/}
   
    <img src={product.thumbnail} className='w-full aspect-square ' alt="" />
   <div> <span className='line-through'>{product.price} </span> <span className='text-red-500'>-{product.discountPercentage}%</span>
   </div>
    <span>{Number((product.price - (product.price * product.discountPercentage / 100)).toFixed(2))}</span>
    <AddtoCart id={product.id}></AddtoCart>
    <Link to={"/productdetails/"+product.id}>View Details</Link>
</div>})
 console.log(filtered_products) 
    return (
    <div>{category_name}
    <div className='flex mx-auto w-11/12 flex-wrap text-center align-middle content-center'>
        {products_ui}
        </div></div>
  )
}
