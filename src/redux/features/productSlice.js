
import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd';

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const existing = state.products.find(product => product.productName === action.payload.productName)
            if (existing) {
                message.error('Already product exist');
            } else {
                state.products.push(action.payload)
                message.success('Product added Successfully');
            }

        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.productName !== action.payload.productName
            );
        },
        clearCart: (state) => {
            state.products = [];
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = productSlice.actions

export default productSlice.reducer