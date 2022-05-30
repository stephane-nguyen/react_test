import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "heard good things"},
    { id: '2', title: 'Slices...', content: "the more i say slice"}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;