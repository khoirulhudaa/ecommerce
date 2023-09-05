import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import commentSlice from "./commentSlice";
import historySlice from "./historySlice";
import shopSlice from "./shopSlice";
import otherSlice from "./otherSlice";

const Reducers = combineReducers({
    authReducer: authSlice,
    cartReducer: cartSlice,
    commentReducer: commentSlice,
    historyReducer: historySlice,
    shopReducer: shopSlice,
    otherSlice: otherSlice
})

export default Reducers