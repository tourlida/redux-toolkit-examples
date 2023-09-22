# 🚀 Redux Toolkit Thunks

With Redux Toolkit, handling asynchronous logic is taken to the next level with `thunks`, which are especially powerful when combined with the built-in utilities.

## 🤔 What are Thunks?

In traditional Redux, action creators directly return action objects. However, for more dynamic operations, particularly asynchronous ones, thunks are indispensable.

A thunk returns a function from an action creator, allowing it to dispatch multiple actions, based on asynchronous results or specific conditions. With Redux Toolkit, `createAsyncThunk` is the tool of choice for creating such thunks tailored for async operations:

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk('users/fetch', async ()=>{
    const response = await axios.get('http://localhost:3005/users');
    return response.data;
});

export {fetchUsers};
```

## 🔄 Thunk Lifecycle States

When you use `createAsyncThunk`, it automatically dispatches actions as the asynchronous operation goes through its lifecycle:

1. **pending**: Represents the start of the async operation.
   - Example action type: `'users/fetch/pending'`
2. **fulfilled**: Dispatched when the promise resolves successfully.
   - Example action type: `'users/fetch/fulfilled'`
3. **rejected**: Dispatched when the promise is rejected.
   - Example action type: `'users/fetch/rejected'`

This automatic lifecycle management streamlines the process of updating state based on the progress and result of asynchronous operations.

## 📦 Integrating Thunks with Slices

To leverage the power of `createAsyncThunk`, you should integrate it with slices created using `createSlice`. Here's how:

1. Create your async thunk.
2. Handle the thunk's action creators within the `extraReducers` field of your slice.

Example:

```javascript
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
    name:'users',
    initialState: initialUsersState,
    reducers:{

    },
    extraReducers(builder) {
        //Fetch user
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.error;
        });
    },
});

export default usersSlice.reducer;
```

This approach ensures that your state is updated in response to the different phases of the asynchronous process represented by your thunk.

## 🌟 Key Benefits of Thunks

1. **🌐 Asynchronous Handling**: Deal with async tasks, like API calls, effortlessly.
2. **✨ Side Effect Management**: Dispatch multiple actions in a controlled manner.
3. **🔍 Access to State**: Thunks can act based on the current state via `getState`.

Integrating thunks into your Redux setup ensures a robust and dynamic application, ready to tackle real-world challenges.

