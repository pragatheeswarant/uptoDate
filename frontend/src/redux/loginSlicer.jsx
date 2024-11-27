
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetLoginState: (state) => {
      state.username = '';
      state.password = '';
      state.error = '';
    },
  },
});

export const { setUsername, setPassword, setError,resetLoginState } = loginSlice.actions;

export default loginSlice.reducer;
