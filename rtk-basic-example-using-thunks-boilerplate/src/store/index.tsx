import { SerializedError, configureStore } from "@reduxjs/toolkit";
import {  songsReducer } from "./slices/songsSlice";
import { moviesReducer } from "./slices/moviesSlice";
import { Movie, Song } from "../models";


export type SongsState = {
  isLoading:boolean;
  data: Song[];
  error: SerializedError | null;
};

export type MovieState = 
{
  isLoading:boolean;
  data: Movie[];
  error: SerializedError | null;
}

export interface RootState {
  songs: SongsState;
  movies: MovieState;
}

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };

