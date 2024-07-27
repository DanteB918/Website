import { createSlice } from '@reduxjs/toolkit';

export const waveColor = createSlice({
  name: 'waveColor',
  initialState: {
    wave: 'rgba(239,239,240,',
  },
  reducers: {
    changeColor: (state, action) => {
      state.wave = action.payload;
      //console.log(current(state)) <- good for testing state.
    },
  }
});

export const { changeColor } = waveColor.actions;

export default waveColor.reducer;
