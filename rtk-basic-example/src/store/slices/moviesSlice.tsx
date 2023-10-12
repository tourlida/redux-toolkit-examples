//moviesSlice.tsx
import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../models";
import { MovieState, reset } from "..";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [] as MovieState,
    reducers: {
      // 'movie' + '/' + 'addMovie' = 'movie/addMovie'
      addMovie(state: MovieState, action: PayloadAction<Movie>) {
        state.push(action.payload);
      },
      // 'movie' + '/' + 'removeSong' = 'movie/removeSong'
      removeMovie(state:MovieState, action: PayloadAction<Movie>) {
        return state.filter((movie:Movie) => movie.id !== action.payload.id);
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    extraReducers(builder: ActionReducerMapBuilder<any>) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        builder.addCase(reset.type, (_state: any, _action: any) => {
          return [];
        });
    },
 });

  export const { addMovie, removeMovie } = moviesSlice.actions;
  export const moviesReducer = moviesSlice.reducer;