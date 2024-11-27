import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: [],
  filterData: [],
  selectedRow: null,
  sortOrder: {},
  search: '',
  ageFilter: '',
  genderFilter: '',
  positionFilter: '',
  experienceFilter: '',
  dobFilter: '',
};

const tableSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.filterData = action.payload; // Initially, filterData is the same as userData
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.selectedRow = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setAgeFilter: (state, action) => {
      state.ageFilter = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
    setPositionFilter: (state, action) => {
      state.positionFilter = action.payload;
    },
    setExperienceFilter: (state, action) => {
      state.experienceFilter = action.payload;
    },
    setDobFilter: (state, action) => {
      state.dobFilter = action.payload;
    },
  },
});

export const {
  setUserData,
  setFilterData,
  setSelectedRow,
  setSortOrder,
  setSearch,
  setAgeFilter,
  setGenderFilter,
  setPositionFilter,
  setExperienceFilter,
  setDobFilter,
} = userSlice.actions;

export default tableSlice.reducer;
