# Redux Simplified with Songs and Movies 🎵🎬

Redux is a predictable state container for JavaScript applications. At its core, it provides a central store to manage the state of your application, making state updates predictable and testable. In our simple app, we showcase how Redux works using two lists: songs and movies.

## 🌐 What is State?

In Redux, "state" is like a model in the MVC pattern and represents the entire state of the app. For our application:

```typescript
export interface RootState {
  songs: string[];
  movies: string[];
}
```

Our `RootState` holds two arrays: one for songs and another for movies.

## 🎵 Songs and 🎬 Movies Slices

In Redux Toolkit, a "slice" represents a portion of the Redux state and its associated reducers and actions. Our app has two slices: `songsSlice` and `moviesSlice`.

### Actions in `songsSlice`:
- `addSong`: Adds a song to the songs list.
- `removeSong`: Removes a song from the list.
- `reset`: Resets the songs list to its initial state.

### Actions in `moviesSlice`:
- `addMovie`: Adds a movie to the movies list.
- `removeMovie`: Removes a movie from the list.

## 🛠 Extra Reducers

Redux Toolkit's `createSlice` automatically generates actions based on reducers we define, but sometimes we might need a slice to respond to actions dispatched by other slices or external sources. That's where `extraReducers` come in!

In our app, the `moviesSlice` has an `extraReducers` field. It listens to the `reset` action from `songsSlice`. When the `reset` action of `songsSlice` is dispatched, it resets the movies list to its initial state as a side effect.

```typescript
extraReducers(builder: ActionReducerMapBuilder<any>) {
  builder.addCase(songsSlice.actions.reset().type, (state: string[], action: any) => {
    return RootStateInitialState.movies;
  });
}
```

This demonstrates the power and flexibility of Redux: different parts of the state can react to the same action.

## 🏪 The Redux Store

Finally, we bundle our slices into a central store:

```typescript
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});
```

The `store` is like the "brain" of our Redux setup. It holds the entire state of our app, and we can dispatch actions to it to change the state.

## In Conclusion 🎉

Redux provides a structured way to manage and update state in our apps. With Redux Toolkit, creating slices of state and actions becomes a breeze. Our simple demo app, featuring songs and movies, offers just a glimpse into the vast capabilities and versatility of Redux.
