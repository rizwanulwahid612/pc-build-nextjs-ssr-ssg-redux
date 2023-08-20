
import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     const matchId = state.products.find(product => product?.id === action.payload?.id)
        //     if (matchId) {
        //         state.products.push(action.payload)

        //     } else {
        //         console.log("product id not match")
        //     }

        // }
        addToCart: (state, action) => {
            const existing = state.products.find(product => product.productName === action.payload.productName)
            if (existing) {
                console.log("already product exist")
            } else {
                state.products.push(action.payload)
            }

        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.productName !== action.payload.productName
            );
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer