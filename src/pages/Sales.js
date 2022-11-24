import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../features/posts/postsSlice';
import { useGetAllProductsQuery } from '../features/posts/postsSlice';



export default function Sales() {
  const {data:products, isLoading, isError, isSuccess, error} = useGetAllProductsQuery();
  console.log(products)
  return (
    <div>Sales
      
    </div>

  )
}
