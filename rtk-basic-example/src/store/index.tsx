import { configureStore } from "@reduxjs/toolkit";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";
import { addMovie, moviesReducer, removeMovie } from "./slices/moviesSlice";
import { Movie, Song } from "../models";
import { reset } from "./actions";


export type SongsState = Song[];
export type MovieState = Movie[];

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
export { addSong, removeSong, addMovie, removeMovie };
export { reset };

