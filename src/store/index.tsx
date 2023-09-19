import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviewsReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

export interface RootState {
  songs: string[];
  movies: string[];
}

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviewsReducer,
  },
});

export { store };
export { addSong, removeSong, addMovie, removeMovie };
export { reset };
