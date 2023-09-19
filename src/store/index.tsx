import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';

export interface RootState{
    songs:string[];
    movies: string[];
}

const RootStateInitialState={
    songs: [],
    movies: []
}

const songsSlice = createSlice({
    name:'song',
    initialState: RootStateInitialState.songs,
    reducers:{
        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state:any,action: PayloadAction<string>){
            state.push(action.payload);
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state,action:PayloadAction<string>){
            return state.filter(song => song !== action.payload);
        }
    }
});

const initialMoviesState:string[] = [];
const moviesSlice = createSlice({
    name:'movie',
    initialState: RootStateInitialState.movies,
    reducers:{
        // 'movie' + '/' + 'addMovie' = 'movie/addMovie'
        addMovie(state:any,action: PayloadAction<string>){
            state.push(action.payload);
        },
        // 'movie' + '/' + 'removeSong' = 'movie/removeSong'
        removeMovie(state,action:PayloadAction<string>){
            return state.filter(movie => movie !== action.payload);
        }
    }
})

const store = configureStore({
    reducer:{
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
})

export  {store};
export const {addSong,removeSong} = songsSlice.actions;
export const {addMovie,removeMovie} = moviesSlice.actions;