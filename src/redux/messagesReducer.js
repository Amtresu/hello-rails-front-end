import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_RANDOM_MESSAGE = 'FETCH_RANDOM_MESSAGE';

export const fetchRandomMessage = createAsyncThunk(
  FETCH_RANDOM_MESSAGE,
  async (args, { dispatch }) => {
    const response = await fetch('http://127.0.0.1:3000/random_message/index');
    const data = await response.json();
    dispatch({
      type: FETCH_RANDOM_MESSAGE,
      payload: data,
    });
  },
);

const messagesReducer = (initialState = {}, action) => {
  switch (action.type) {
    case FETCH_RANDOM_MESSAGE:
      return { ...action.payload };
    default: {
      return initialState;
    }
  }
};

export default messagesReducer;
