import { createSlice } from '@reduxjs/toolkit';

export const heroText = createSlice({
  name: 'heroText',
  initialState: {
    text: '',
    typedText: '',
    subText: ''
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload.text;
      state.typedText = action.payload.typedText;
      state.subText = action.payload.subText;
    },
  }
});

export const { changeText } = heroText.actions;

export default heroText.reducer;
