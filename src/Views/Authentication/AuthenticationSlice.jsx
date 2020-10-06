import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGet } from '../Share/Service'

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await axiosGet(userId);
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

export const { createPost, updatePost, deletePost } = postsSlice.actions
// Export the reducer, either as a default or named export
export default postsSlice.reducer