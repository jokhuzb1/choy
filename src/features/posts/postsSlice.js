import { apiSlice } from "../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";


const productsAdapter = createEntityAdapter({
    sortComparer:(a,b)=> b.date.localeCompare(a.date)
})

const initialState = productsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
               //GET ALL PRODUCTS
        getAllProducts:builder.query({
            query:()=>"/products",
            providesTags:['Products'] 
        }),
        //APP PRODUCTS
        addProducts:builder.mutation({
             query:(product)=>({
                url:'/products',
                method:'POST',
                body:product
             }),
             invalidatesTags:['Products']
        }),
        
        //DELETE ONE BY ID

        deleteProduct:builder.mutation({
            query:({id})=>({
                url:`/products/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:['Products']
        }),
        getProduct:builder.query({
            query:(product)=>`products/search?q=${product}`
        }),
    }),
});


export const selectProductResult = extendedApiSlice.endpoints.getAllProducts.select();

const selectProductsData = createSelector(
    selectProductResult,
    productResult=>productResult.data
    )
    
    //CREATE SELECTORS
    export const {
        selectAll:selectAllProducts,
        selectById: selectProductById,
        selectIds: selectProductIds
    } = productsAdapter.getSelectors(state=>selectProductsData(state) ?? initialState);


export const {useGetAllProductsQuery,useGetProductQuery, useDeleteProductMutation,useAddProductsMutation } = extendedApiSlice;