import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviewsReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
import { createLogger } from 'redux-logger';


export interface RootState {
  songs: string[];
  movies: string[];
}

const middlewares = [createLogger()];

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviewsReducer,
  },
  middleware: middlewares,
});

export { store };
export { addSong, removeSong, addMovie, removeMovie };
export { reset };
