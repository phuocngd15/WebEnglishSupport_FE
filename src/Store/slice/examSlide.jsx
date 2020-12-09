import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGet, axiosPost } from '../../axios/axios'

const getExamsRequest = createAsyncThunk('/listExam', async model => {
  const response = await axiosGet(model)
  return response.data
})

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
    },
    getOneExam: (state, action) => {
      state = state
      state.exam = action.payload
    }
  },
  extraReducers: {
    [getExamsRequest.pending]: (state, action) => {
      console.log('pending')
    },
    [getExamsRequest.fulfilled]: (state, action) => {
      state.exams = action.payload
      console.log('fulfilled')
    },
    [getExamsRequest.rejected]: (state, action) => {
      console.log('rejected')
      state.messageLog = 'Cannot get list exams'
    },
    [getExamRequest.pending]: (state, action) => {
      console.log('pending')
    },
    [getExamRequest.fulfilled]: (state, action) => {
      state.exam = action.payload
      console.log('fulfilled')
    },
    [getExamRequest.rejected]: (state, action) => {
      console.log('rejected')
      state.messageLog = 'Cannot get exam'
    }
  }
})

const { reducer, actions } = examSlide
const { getExams, getOneExam } = actions
export { getExams, getExamsRequest, getExamRequest, getOneExam }
export default reducer
