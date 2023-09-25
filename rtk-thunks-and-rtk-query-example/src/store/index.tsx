import { configureStore} from "@reduxjs/toolkit";
import { UsersState, usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";
import { Album } from "./models";


interface AlbumsState{
  data: Album[]
}
export interface RootState {
  users: UsersState;
  [albumsApi.reducerPath] : AlbumsState;
}
export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export {useFetchAlbumsQuery, useCreateAlbumMutation} from "./apis/albumsApi";
