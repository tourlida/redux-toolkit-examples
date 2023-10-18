import { SerializedError, configureStore } from "@reduxjs/toolkit";
import {  songsReducer } from "./slices/songsSlice.tsx";
import { moviesReducer } from "./slices/moviesSlice";
import { Movie, Song } from "../models";
import { reset } from "./actions";


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
export { reset };

export {fetchMovies,addMovie,deleteMovie} from './thunks/moviesThunk.tsx';
export {fetchSongs,addSong,deleteSong} from './thunks/songsThunk.tsx';
export {resetAllData} from './thunks/resetThunk.tsx';
