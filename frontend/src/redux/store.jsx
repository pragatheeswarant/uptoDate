
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userapi'; 
import formReducer from './formSlicer'; 
import loginReducer from './loginSlicer'; 
import userReducer from './services/userSlice';



const store = configureStore({
  reducer: {
    form: formReducer, 
    login:loginReducer,
    users: userReducer,
  
   
    [userApi.reducerPath]: userApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), 
});

export default store;
