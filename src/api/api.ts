import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = 'https://dummyjson.com'
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getCategories: builder.query({
            query: () => '/products/categories'
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery
} = api