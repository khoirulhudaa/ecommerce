import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartInterface } from "../../../utils/interfaces/cartInterface";

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
        addCart: (state, action: PayloadAction<CartInterface>) => {
            state.dataOrders.push(action.payload)
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer