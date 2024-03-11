import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartItems from '../../cartItems';
import axios from 'axios';


const url = 'https://course-api.com/react-useReducer-cart-project';

// export const getcartItems = createAsyncThunk(
//     'cart/getcartItems', () => {                      //REMOVED  from RTK 2.0
//         return fetch(url)
//         .then((res) => res.json())
//         .catch((err) => {console.log(err)})
// }
// )

export const getcartItems = createAsyncThunk('cart/getcartItems',
    async(name,thunkAPI) => {
        try {
            const res = await axios(url)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong..')
        }
    })

    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const initialState = {
    cartItems:[],
    amount:1,
    total:0,
    isLoading: true
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter( (item) => (item.id !== itemId))
        },
        increaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => (
                item.id === payload.id
            ))
            cartItem.amount = cartItem.amount + 1;
        },
        decreaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => (
                item.id === payload.id
            ))
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach( (item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount;
            state.total = total;
        }
    },
    
    extraReducers:(builder) => 
    {
        builder 

        .addCase(getcartItems.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getcartItems.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
            // console.log(action.payload);
        })
        .addCase(getcartItems.rejected, (state) => {
            state.isLoading = false;
        })  
    }
        
    
    
    // {
    //     [getcartItems.pending] : (state) => {
    //         state.isLoading = true;
    //     },
    //     [getcartItems.fulfilled] : (state, action) => {             //REMOVED
    //         console.log(action)
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //     },
    //     [getcartItems.rejected] : (state) => {
    //         state.isLoading = false;
    //     }
    // }


})

// console.log(cartSlice);

export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;