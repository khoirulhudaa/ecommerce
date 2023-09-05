import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartInterface } from "../../../utils/interfaces/cartInterfaces";

interface CartState {
    dataOrders: CartInterface[];
}

const initialState: CartState = {
    dataOrders: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<CartInterface>) => {
            console.log('result action cart:', action)
            state.dataOrders.push(action.payload)
        }
    }
})

export const { addOrder } = cartSlice.actions
export default cartSlice.reducer