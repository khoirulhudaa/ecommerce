import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShopInterface } from "../../../utils/interfaces/shopInterface";


interface shopInterface {
    dataShop: ShopInterface | null
}

const initialState: shopInterface = {
    dataShop: null
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        getShop: (state, action:PayloadAction<ShopInterface>) => {
            state.dataShop = action.payload
        }
    }
})

export const { getShop } = shopSlice.actions
export default shopSlice.reducer