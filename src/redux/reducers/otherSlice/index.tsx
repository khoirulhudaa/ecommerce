import { createSlice } from "@reduxjs/toolkit";

interface OtherInterface {
    path: string,
    nameProductNow: string
}

const initialState: OtherInterface = {
    path: '',
    nameProductNow: ''
}

const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        getPath: (state, { payload }) => {
            state.path = payload
        },
        getNameProductNow: (state, { payload }) => {
            state.nameProductNow = payload
        }
    }
})

export const { getPath, getNameProductNow } = otherSlice.actions
export default otherSlice.reducer