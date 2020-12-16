import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
const doExamSlice = createSlice({
  name: 'doExam',
  initialState: {
    answerSheet: [],
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
  extraReducers: {}
});

const { reducer, actions } = doExamSlice;
const { chooseAnswer } = actions;
export { chooseAnswer };
export default reducer;
