import {createApi}from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery}from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000",}),
    tagTypes:['Products'],
    endpoints:(builder)=>({}),
})
 