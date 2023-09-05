import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentInterface } from "../../../utils/interfaces/commentInterface";

interface interfaceComment {
    dataComment: CommentInterface | null
}

const initialState: interfaceComment = {
    dataComment: null
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        getComment: (state, action: PayloadAction<CommentInterface>) => {
            state.dataComment = action.payload
        }
    }
})

export const { getComment } = commentSlice.actions
export default commentSlice.reducer