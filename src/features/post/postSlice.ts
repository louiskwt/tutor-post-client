import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Specify the Post object type
export type Post = {
    title: string
    name: string
    subject: string
    description: string
    location: string
    number: string
    vaccines: number
    visit: boolean
    createdAt: string
}

// Post state interface

export interface PostState {
    loading: boolean,
    posts: Post[]
}
// Initial state
const initialState: PostState = {
    loading: true,
    posts: []
}

// Post slice
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // Reducer functions
        loadPost: (state, action: PayloadAction<Post[]>) => {
            state.loading = false
            state.posts = action.payload    
        },
        reload: (state) => {
            state.loading = true
        }
    }
})

// Pull out the case reducer functions from action creators
export const { loadPost, reload } = postSlice.actions

export default postSlice.reducer
