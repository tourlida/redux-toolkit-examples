## 🚀 Extending our Project with RTK Query

As we continue to explore best practices and tools for state management, we're taking the next leap by integrating **RTK Query** into our current project. This addition not only elevates our tech stack but also gives us a chance to see how it fares against thunks, shedding light on RTK Query's unique features.

### 🥊 RTK Query vs Thunks: A Comparative Overview

Our project's foundation was built using thunks for asynchronous operations. Transitioning, RTK Query introduces itself as a powerful data fetching and caching solution, showering developers with numerous benefits:

- **🔒 Automated Caching**: A smart cache system that avoids redundant network requests.
- **🔄 Automatic Refetching**: Keeps your data up-to-date.
- **⏲️ Polling**: Periodic data fetching, no manual effort needed.
- **🌟 Optimistic Updates**: Anticipates and responds quickly to UI needs.
- **🔂 Automatic Retries**: Resilient and persistent against request failures.
- **❌ Mutation Invalidations**: Ensures cache freshness post-data mutations.
- **📦 Normalized Caching**: Efficient and organized data storage.
- **🔍 Query Lifecycle**: A deep dive into every query's life stages.
- **🛠️ DevTools Integration**: Debugging made exponentially easier.
- **🍰 Auto Slice Creation**: Reduces boilerplate, keeps things neat.
- **🔗 Hooks Integration**: The charm of React hooks extended to data!

### 🧱 State Management: Thunks vs RTK Query

1. **Thunks (Via `createAsyncThunk`)**:
   - **📝 State Blueprint**: Action types for every possible state of an async operation.
   - **🔄 State Revision**: Employs slices from `createSlice` and responds to action types to update state.

2. **RTK Query (Via `createApi`)**:
   - **🗃️ State Blueprint**: A dedicated `api` slice holding all essential information.
   - **🔀 State Revision**: Everything is set up automatically, from actions to reducers, making data management a breeze.

### 🎣 RTK Query's Hooks and Naming Conventions

RTK Query, being the modern tool that it is, leverages React hooks based on the endpoints you craft within `createApi`:

#### 🏷️ Naming Conventions:

For an endpoint named `fetchAlbums`:
- `useFetchAlbumsQuery`: A dedicated hook for data retrieval.
- `useCreateAlbumMutation`: All about mutations!

### 🏷️ RTK Query's Sophisticated Tags System

RTK Query's **tags** system is a game-changer, introducing smart labeling to cached data and making cache management a walk in the park.

#### 📖 Tags: The Basics

Tags serve as labels attached to cached data, allowing RTK Query to map relationships and act upon related data during mutations.

#### 🤔 Why the Emphasis on Tags?

- **🚫 Cache Invalidation**: No more stale data on the UI.
- **🔄 Automatic Refetching**: Keeps your cache fresh without lifting a finger.
- **🗑️ Efficient Cache Management**: Makes cache cleaning and updating efficient.

#### Practical Implementation:

In our project, consider two endpoints: one fetching albums and another adding a new album. Upon adding a new album, the cached list might be obsolete. Tags ensure the cache stays relevant:

```typescript
const albumsApi = createApi({
reducerPath:'albums',
baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/albums'
}),
endpoints:(builder) => {
    return {
        fetchAlbums: builder.query({
            query: (user:User) =>{
                return {
                    url:'/',
                    params:{
                        userId: user.id
                    },
                    method:'GET'
                };
            },
            providesTags: (result,error,user) =>{
                return [{
                    type:'Album',
                    id:user.id
                }]
            }
        }),
        createAlbum:builder.mutation({
            invalidatesTags: (result,error, user) =>{
                return [{
                    type:'Album',
                    id:user.id
                }]
            },
            query:(user:User)=>{
                return {
                    url:'/',
                    body:{
                        userId: user.id,
                        title: faker.commerce.productName()
                    },
                    method:'POST'
                }
            }
        })
    }
},
tagTypes: ['Album']
});
```