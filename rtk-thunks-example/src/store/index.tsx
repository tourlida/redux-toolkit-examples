import { configureStore } from "@reduxjs/toolkit";
import { UsersState, usersReducer } from "./slices/usersSlice";
import { RequestState, requestsReducer } from "./slices/requestsSlice";

export interface RootState {
    users: UsersState;
    requests: RequestState;
}
export const store = configureStore({
    reducer: {
      users: usersReducer,
      requests: requestsReducer
    },
  });
  
export * from './thunks/fetchUsers';
export * from './thunks/addUser';