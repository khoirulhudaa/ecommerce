import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthInterface } from "../../../utils/interfaces/authInterfaces";

interface dataUser {
    dataUser: AuthInterface | null
}

const initialState: dataUser = {
    dataUser: null
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<AuthInterface>) => {
            state.dataUser = action.payload
        },
        removeUser: (state) => {
            state.dataUser = null
        }
    }
})

export const { getUser } = authSlice.actions
export default authSlice.reducer