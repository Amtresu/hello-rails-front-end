import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesReducer';

const store = configureStore({
  reducer: messagesReducer,
});

export default store;
