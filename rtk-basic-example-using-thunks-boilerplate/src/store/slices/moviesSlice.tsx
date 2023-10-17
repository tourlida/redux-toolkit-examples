//moviesSlice.tsx
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { MovieState, reset } from "..";


const initialMoviesState:MovieState = {
  data:[],
  isLoading:false,
  error: null
}

const moviesSlice = createSlice({
    name: "movie",
    initialState:initialMoviesState,
    reducers: { },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    extraReducers(builder: ActionReducerMapBuilder<any>) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        builder.addCase(reset.type, (_state: any, _action: any) => {
          return [];
        });
    },
 });

  export const moviesReducer = moviesSlice.reducer;