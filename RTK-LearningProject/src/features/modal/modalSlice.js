import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}

const Modalslice = createSlice({
    name:'modal',
    initialState:initialState,
    reducers:{
        openModal: (state,action) => {
            state.isOpen = true;
        },
        closeModal: (state,action) => {
            state.isOpen = false;
        },
    }
})

export const {openModal, closeModal} = Modalslice.actions
export default Modalslice.reducer;