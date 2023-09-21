import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { createLogger } from 'redux-logger';


const middlewares = [createLogger()];

export const store = configureStore({
    reducer: {
      users: usersReducer,
    },
    middleware: middlewares,
  });
  
