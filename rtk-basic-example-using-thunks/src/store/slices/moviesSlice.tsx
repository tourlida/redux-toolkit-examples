//moviesSlice.tsx
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  MovieState,
  addMovie,
  deleteMovie,
  resetAllData,
} from "..";
import { Movie } from "../../models";

const initialMoviesState: MovieState = {
  data: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialMoviesState,
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  extraReducers(builder: ActionReducerMapBuilder<any>) {
    //Add movie
    builder.addCase(addMovie.pending, (state: MovieState) => {
      state.isLoading = true;
    });

    builder.addCase(addMovie.fulfilled, (state: MovieState, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addMovie.rejected, (state: MovieState, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Delete movie
    builder.addCase(deleteMovie.pending, (state: MovieState) => {
      state.isLoading = true;
    });

    builder.addCase(deleteMovie.fulfilled, (state: MovieState, action) => {
      state.isLoading = false;
      state.data = state.data.filter((movie: Movie) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return movie.id !== action.payload;
      });
    });

    builder.addCase(deleteMovie.rejected, (state: MovieState, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(resetAllData.fulfilled, () => {
      return initialMoviesState;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
