import {
  ActionReducerMapBuilder,
  createSlice,
} from "@reduxjs/toolkit";
import { SongsState, reset } from "..";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    builder.addCase(reset.type, (_state: any, _action: any) => {
      return [];
    });
  },
});

export const songsReducer = songsSlice.reducer;
