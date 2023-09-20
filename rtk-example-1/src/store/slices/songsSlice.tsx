import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
      // 'song' + '/' + 'addSong' = 'song/addSong'
      addSong(state: any, action: PayloadAction<string>) {
        state.push(action.payload);
      },
      // 'song' + '/' + 'removeSong' = 'song/removeSong'
      removeSong(state, action: PayloadAction<string>) {
        return state.filter((song) => song !== action.payload);
      }
    },
    extraReducers(builder: ActionReducerMapBuilder<any>) {
      builder.addCase(reset.type, (state: string[], action: any) => {
        return [];
      });
    },
  });
  
  export const { addSong, removeSong } = songsSlice.actions;
  export const songsReducer = songsSlice.reducer;