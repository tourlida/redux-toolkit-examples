import { configureStore } from "@reduxjs/toolkit";
import { UsersState, usersReducer } from "./slices/usersSlice";

export interface RootState {
    users: UsersState;
}
export const store = configureStore({
    reducer: {
      users: usersReducer,
    },
  });
  
export * from './thunks/fetchUsers';