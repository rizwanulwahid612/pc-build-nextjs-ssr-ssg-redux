
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api'
import productSlice from './features/productSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

