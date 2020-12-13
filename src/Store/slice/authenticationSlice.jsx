import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGet, axiosPost, post } from '../../axios/axios'

const signIn = createAsyncThunk('account/signin', async model => {
  const response = await axiosPost(model)
  return response.data
})
const signUP = createAsyncThunk('account/signup', async model => {
  const response = await axiosPost(model)
  return response.data
})

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    loginState: {},
    isLogin: false,
    loading: false
  },
  reducers: {
    logOut: state => {
      state.loginState = {}
      state.isLogin = false
    },
    updateStateLogin: (state, action) => {
      const data = action.payload
      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      }
    }
  },
  extraReducers: {
    [signIn.pending]: (state, action) => {},
    [signIn.fulfilled]: (state, action) => {
      const data = action.payload
      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      }
      state.isLogin = true
    },
    [signIn.rejected]: (state, action) => {
      state.isLogin = false
      state.messageLog = 'logfail'
    },

    [signUP.pending]: (state, action) => {},
    [signUP.fulfilled]: (state, action) => {
      const data = action.payload

      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      }
    },
    [signUP.rejected]: (state, action) => {}
  }
})
const { reducer, actions } = authenticationSlice
const { logOut, updateStateLogin } = actions
export { logOut, updateStateLogin, signIn, signUP }
// Export the reducer, either as a default or named export
export default reducer
