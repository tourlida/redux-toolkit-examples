import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAllMovies } from "./moviesThunk";
import { deleteAllSongs } from "./songsThunk";

export const resetAllData = createAsyncThunk(
    'reset/resetAllData',
    async (_, { dispatch }) => {
      await dispatch(deleteAllMovies());
      await dispatch(deleteAllSongs());
    }
  );