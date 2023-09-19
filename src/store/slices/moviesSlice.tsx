import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
      // 'movie' + '/' + 'addMovie' = 'movie/addMovie'
      addMovie(state: any, action: PayloadAction<string>) {
        state.push(action.payload);
      },
      // 'movie' + '/' + 'removeSong' = 'movie/removeSong'
      removeMovie(state, action: PayloadAction<string>) {
        return state.filter((movie) => movie !== action.payload);
      },
    },
    extraReducers(builder: ActionReducerMapBuilder<any>) {
      builder.addCase(reset.type, (state: string[], action: any) => {
        return [];
      });
    },
  });

  export const { addMovie, removeMovie } = moviesSlice.actions;
  export const moviewsReducer = moviesSlice.reducer;