import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { SongsState, addSong, deleteSong, fetchSongs, resetAllData } from "..";
import { Song } from "../../models";

const initialSongsState: SongsState = {
  data: [],
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "song",
  initialState: initialSongsState,
  reducers: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  extraReducers(builder: ActionReducerMapBuilder<any>) {
    //Fetch songs
    builder.addCase(fetchSongs.pending, (state: SongsState) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSongs.fulfilled, (state: SongsState, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSongs.rejected, (state: SongsState, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Add song
    builder.addCase(addSong.pending, (state: SongsState) => {
      state.isLoading = true;
    });

    builder.addCase(addSong.fulfilled, (state: SongsState, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addSong.rejected, (state: SongsState, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Delete song
    builder.addCase(deleteSong.pending, (state: SongsState) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSong.fulfilled, (state: SongsState, action) => {
      state.isLoading = false;
      state.data = state.data.filter((movie: Song) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        return movie.id !== action.payload;
      });
    });
    builder.addCase(deleteSong.rejected, (state: SongsState, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(resetAllData.fulfilled, () => {
      return initialSongsState;
    });
  },
});

export const songsReducer = songsSlice.reducer;
