import React from 'react'
import { useGetAllProductsQuery, useDeleteProductMutation,useAddProductsMutation } from '../features/posts/postsSlice';
import ProductsList from '../components/products/ProductsList';
export default function Products() {
  const {data:products, isLoading, isError, isSuccess, error} = useGetAllProductsQuery();

  const [addProducts, {isLoading:isNewProductBeingAdded}] = useAddProductsMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const handleSubmit = ()=>{
    addProducts({
      articul:"R-1",
      senderId:"5",
      price:"2",
      perBagWeight:".750",
      bagQuantity:200,
      productType:"font",
      date:"2022-20-10",
      packageType:"bag"
    })
  } 
  
  let content;
  if(isLoading) {
    return content = <p>Loading...</p>
  }else if(isSuccess){
    content = <ProductsList products={products} deleteProduct={deleteProduct}/>;
  } else if(isError){
    content = <p>{JSON.stringify(error)}</p>
  }

  return (
    <div>
    <div>{content}</div>
    <div onClick={handleSubmit}><button disabled={isNewProductBeingAdded ? true:false}>AddProduct</button></div>
    </div>
  )
}