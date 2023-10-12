import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { Song } from "../../models";
import { SongsState, reset } from "..";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as SongsState,
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state: SongsState, action: PayloadAction<Song>) {
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state: SongsState, action: PayloadAction<Song>) {
      return state.filter((song: Song) => song.id !== action.payload.id);
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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
