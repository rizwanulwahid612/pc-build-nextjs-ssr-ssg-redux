import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    //baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000` }),
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/` }),
    endpoints: (builder) => ({
        getAlldata: builder.query({
            query: () => `/alldata`,
        }),
        getProductById: builder.query({
            query: (id) => `/alldata/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAlldataQuery, useGetProductByIdQuery } = apiSlice