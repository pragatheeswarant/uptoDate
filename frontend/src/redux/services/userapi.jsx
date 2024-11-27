
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userapi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), 
  endpoints: (builder) => ({
    submitUserData: builder.mutation({
      query: (userData) => ({
        url: '/users/data', 
        method: 'POST',
        body: userData, 
      }),
    }),
  }),
});

export const { useSubmitUserDataMutation } = userApi;
