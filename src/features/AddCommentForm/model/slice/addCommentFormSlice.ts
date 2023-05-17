import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormAction } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
