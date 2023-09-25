## Extending our Project with RTK Query

In our ongoing efforts to explore the best practices and tools for state management, we're extending our current project to incorporate **RTK Query**. This addition will allow us to compare it directly with thunks and highlight the key differences and advantages that RTK Query brings to the table.

### RTK Query vs Thunks: A Comparative Overview

While our project has been using thunks for asynchronous operations, RTK Query offers a comprehensive toolkit designed specifically for data fetching and caching, providing several out-of-the-box features:

- **Automated Caching**: By caching results, RTK Query reduces the need for redundant network requests.
- **Automatic Refetching**: It keeps data fresh by re-fetching at specified intervals.
- **Polling**: An inbuilt mechanism to fetch data at regular intervals.
- **Optimistic Updates**: Provides a more responsive UI by predicting successful outcomes.
- **Automatic Retries**: In case of request failures, it can be set to try again automatically.
- **Mutation Invalidations**: After data changes, RTK Query can refresh specific cached entities.
- **Normalized Caching**: Data is stored in an efficient flat structure, reducing redundancy.
- **Query Lifecycle**: Offers granular control with lifecycle events.
- **DevTools Integration**: Enhanced debugging experience with the Redux DevTools.
- **Auto Slice Creation**: Minimizes boilerplate by auto-generating Redux slices.
- **Hooks Integration**: Includes React hooks for streamlined data interaction.

### State Updates: RTK Query vs Thunks

1. **Thunks (Using `createAsyncThunk`)**:
   - **State Structure**: When using `createAsyncThunk`, the generated action creators dispatch three kinds of actions for a given asynchronous function: `pending`, `fulfilled`, and `rejected`. This triad allows you to handle different states of an asynchronous request.
   - **State Update**: The state is commonly updated using slices created by `createSlice`. The `extraReducers` field in `createSlice` listens for the actions dispatched by the thunk and updates the state accordingly. For instance, on a `pending` action, you might set a `loading` flag in your state, while on `fulfilled`, you'd store the received data and reset the `loading` flag.

2. **RTK Query (Using `createApi`)**:
   - **State Structure**: RTK Query automatically manages a segment of your Redux store under the `api` slice. This slice houses data, loading state, errors, and caching information for every endpoint defined.
   - **State Update**: When you define endpoints using `createApi`, RTK Query automatically sets up reducers and actions for you. For every endpoint, there are actions like `endpointName/pending`, `endpointName/fulfilled`, and `endpointName/rejected`. Using these actions, RTK Query automatically updates the `api` slice in your store, managing caching, data storage, and more. For example, when data is fetched using a query, it's automatically stored in the `api` slice without you having to manually set up reducers.

### RTK Query's Hooks and Naming Conventions

RTK Query automatically generates React hooks based on the endpoints you define within `createApi`. These hooks offer a more declarative approach to data fetching and state management in React components.

#### Naming Conventions:

For an endpoint named `fetchAlbums`:
- `useFetchAlbumsQuery`: A hook to fetch data and read its state.
- `useFetchAlbumsMutation`: A hook for mutations, if the endpoint is mutation-based.

#### Example:

```javascript
const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      query: (user) => ({
        url: '/',
        params: { userId: user.id },
        method: 'GET',
      }),
    }),
  }),
});

// Exporting the auto-generated hooks
export const { useFetchAlbumsQuery } = albumsApi;
