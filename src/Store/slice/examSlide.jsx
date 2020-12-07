import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGet, axiosPost } from '../../axios/axios'

const getExamRequest = createAsyncThunk('/exam', async model => {
  const response = await axiosGet(model)
  return response.data
})

const examSlide = createSlice({
  name: 'exam',
  initialState: {
    token: localStorage.getItem('token'),
    exam: null,
    exams: [],
    loading: false,
    error: {}
  },
  reducers: {
    getExams: (state, action) => {
      const data = action.payload
      state.exams = data[0]
    }
  },
  extraReducers: {
    [getExamRequest.pending]: (state, action) => {
      console.log('pending')
    },
    [getExamRequest.fulfilled]: (state, action) => {
      state.exams = action.payload
      console.log('fulfilled')
    },
    [getExamRequest.rejected]: (state, action) => {
      console.log('rejected')
      state.messageLog = 'Cannot get list exams'
    }
  }
})

const { reducer, actions } = examSlide
const { getExams } = actions
export { getExams, getExamRequest }
export default reducer
