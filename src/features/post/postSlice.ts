import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Post = {
    title: string
    name: string
    subject: string
    description: string
    location: string
    number: string
    vaccines: number
    visit: boolean
}

export interface PostState {
    loading: boolean,
    posts: Post[]
}

const initialState: PostState = {
    loading: true,
    posts: []
}

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
