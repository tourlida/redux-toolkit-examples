import {
  ActionReducerMapBuilder,
  createSlice,
} from "@reduxjs/toolkit";
import { SongsState } from "..";

const initialSongsState:SongsState = {
  data:[],
  isLoading:false,
  error: null
}

const songsSlice = createSlice({
  name: "song",
  initialState: initialSongsState,
  reducers: {
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  extraReducers(builder: ActionReducerMapBuilder<any>) {
  },
});

export const songsReducer = songsSlice.reducer;
