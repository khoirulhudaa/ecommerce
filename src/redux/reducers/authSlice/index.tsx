import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authInterface } from '../../../utils/interfaces/authInterface'

interface dataUser {
    auth: authInterface | null,
    token: string
}

const initialState: dataUser = {
    auth: null,
    token: ""
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authSignIn: (state, action: PayloadAction<authInterface>) => {
            state.auth = action.payload
        },
        authSignOut: (state) => {
            state.auth = null
        },
        saveToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload
        },
        clearToken: (state) => {
            state.token = ""
        }
    }
})

export const { authSignIn, authSignOut, saveToken, clearToken } = authSlice.actions
export default authSlice.reducer