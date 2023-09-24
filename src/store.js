import { createSlice, configureStore } from '@reduxjs/toolkit';
import waveReducer from './Wave';
// import { waveColorReducer } from './Wave';

console.log(waveReducer);

export default configureStore({
    reducer: {
      waveReducer
    }
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(changeColor())
// // {value: 1}
// store.dispatch(changeColor())
// {value: 2}