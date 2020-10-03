import { createSlice } from '@reduxjs/toolkit'

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        createPost(state, action) { },
        updatePost(state, action) { },
        deletePost(state, action) { }
    },
    extraReducers: {
        [fetchUserById.pending]: (state, action) => {
            console.log('pending')
        },
        [fetchUserById.fulfilled]: (state, action) => {
            console.log('fulfilled')
        },
        [fetchUserById.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer