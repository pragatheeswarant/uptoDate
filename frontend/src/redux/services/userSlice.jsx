import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUserData = createAsyncThunk('users/fetchUserData', async () =>
 {
  const response = await fetch('http://localhost:5000/users');
  const data = await response.json();
  return data;
});


export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => 
    {
  await fetch(`http://localhost:5000/users/${userId}`, { method: 'DELETE' });
  return userId;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) =>
         {
        state.loading = true;
      })
  .addCase(fetchUserData.fulfilled, (state, action) =>
     {
        state.loading = false;
        state.data = action.payload;
      })
    .addCase(fetchUserData.rejected, (state, action) =>
           {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => 
        {
        state.data = state.data.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
