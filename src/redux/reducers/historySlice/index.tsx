import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HistoryInterface } from "../../../utils/interfaces/historyInterface";

interface historyInterface {
    dataHistoryBuy: HistoryInterface[]
}

const initialState: historyInterface = {
    dataHistoryBuy: []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        getHistory: (state, action: PayloadAction<HistoryInterface>) => {
            state.dataHistoryBuy.push(action.payload)
        },
        removeHistory: (state, { payload }) => {
            state.dataHistoryBuy.splice(1, payload)
        }
    }
})

export const { getHistory } = historySlice.actions
export default historySlice.reducer