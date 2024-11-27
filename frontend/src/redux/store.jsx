
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userapi'; 
import formReducer from './formSlicer'; 
import loginReducer from './loginSlicer'; 

const store = configureStore({
  reducer: {
    form: formReducer, 
    login:loginReducer,
    [userApi.reducerPath]: userApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), 
});

export default store;
