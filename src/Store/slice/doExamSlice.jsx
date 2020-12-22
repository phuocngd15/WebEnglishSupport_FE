import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { cloneDeep } from 'lodash';
import { axiosGet } from '../../axios/axios';
import fs from 'fs';
const getGGExam = createAsyncThunk('exam/listExam', async model => {
  const filterModel = {
    url: `http://localhost:9999/api/uploadFile/getOne`,
    id: `1TuI1WgsC9XmWj4PBSSXVoohdSg1bT3i4`
  };
  var dest = fs.createWriteStream(`./aaa.pdf`);

  const response = await Axios(`http://localhost:9999/api/uploadFile/getOne`, {
    method: 'GET',
    responseType: 'blob' //Force to receive data in a Blob Format
  })
    .then(response => {
      //Create a Blob from the PDF Stream
      const file = new Blob([response.data], { type: 'application/pdf' }); //Build a URL from the file
      const fileURL = URL.createObjectURL(file); //Open the URL on new Window
      window.open(fileURL);
    })
    .catch(error => {
      console.log(error);
    });
  return response.data;
});

const doExamSlice = createSlice({
  name: 'doExam',
  initialState: {
    answerSheet: [],
    file: null,
    loading: false,
    error: {}
  },
  reducers: {
    chooseAnswer: (state, action) => {
      const { stt, dapAn } = action.payload;
      let tmp = cloneDeep(state.answerSheet);
      // chua xong
      tmp.push({ stt, dapAn });
      state.answerSheet = tmp;
    }
  },
  extraReducers: {
    [getGGExam.pending]: (state, action) => {},
    [getGGExam.fulfilled]: (state, action) => {
      state.file = action.payload;
    },
    [getGGExam.rejected]: (state, action) => {
      state.messageLog = 'Cannot get list exams';
    }
  }
});

const { reducer, actions } = doExamSlice;
const { chooseAnswer } = actions;
export { chooseAnswer, getGGExam };
export default reducer;
