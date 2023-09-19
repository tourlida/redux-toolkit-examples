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

### Actions in `moviesSlice`:
- `addMovie`: Adds a movie to the movies list.
- `removeMovie`: Removes a movie from the list.

### Other actions:
- `reset`: Reset movies and songs lists.


## 🛠 Extra Reducers

Redux Toolkit's `createSlice` automatically generates actions based on reducers we define, but sometimes we might need a slice to respond to actions dispatched by other slices or external sources. That's where `extraReducers` come in!

In our app, both `songsSlice` and `moviesSlice` can respond to the separate reset action. For example, in the moviesSlice:
```typescript
extraReducers(builder: ActionReducerMapBuilder<any>) {
  builder.addCase(songsSlice.actions.reset().type, (state: string[], action: any) => {
    return RootStateInitialState.movies;
  });
}
```

This demonstrates the power and flexibility of Redux: different parts of the state can react to the same action.

## 📜 Redux Logger

In our application, we have also incorporated `redux-logger`, which is a middleware that logs every action that gets dispatched to the store and the state of the store after every dispatch.

### Why Use Redux Logger?

- **Transparency**: By logging actions and state, you can see the flow of data and understand how actions are changing the state. This is invaluable during development to understand how your application works and to debug it.
  
- **Debugging**: If there's an unintended change in state or if an action doesn't produce the expected result, the logs provide immediate insight into what went wrong.

- **Performance Analysis**: Observing action logs can give you insights if there's any action that's dispatched more frequently than expected, potentially leading to performance bottlenecks.

To set up `redux-logger`, we add it to our list of middlewares:

```typescript
const middleware = [createLogger()];
```

With redux-logger enabled, you can now see a log of every action and state change in the console, making the development process smoother and more informative.



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
