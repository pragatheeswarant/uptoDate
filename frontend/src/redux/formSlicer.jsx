import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  formData: {
    name: '',
    dob: '',
    email: '',
    phone: '',
    degree: '',
    skills: [],
    position: '',
    address: '',
    gender: '',
    experience: 0,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;  
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
