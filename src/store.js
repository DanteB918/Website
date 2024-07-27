import { configureStore } from '@reduxjs/toolkit';
import waveReducer from './Wave';
import heroText from './HeroText';

export default configureStore({
    reducer: {
      waveReducer,
      heroText
    }
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
