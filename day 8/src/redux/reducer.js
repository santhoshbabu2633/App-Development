import { createSlice } from "@reduxjs/toolkit";
export const dashSlice=createSlice(
    {
        name:"dash",
        initialState:
        {
            email:null

        },
        reducers:
        {
            setEmail(state,action)
            {
                state.email = action.payload
            }
        }
    }
);
export const{setEmail}= dashSlice.actions;
export default dashSlice.reducer;