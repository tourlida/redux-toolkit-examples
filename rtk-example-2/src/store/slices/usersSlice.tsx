import {createSlice} from '@reduxjs/toolkit';

interface UsersState{
    data :string[];
}

const initialUsersState:UsersState = {
    data:[]
}

const usersSlice = createSlice({
    name:'users',
    initialState: initialUsersState,
    reducers:{

    }
});

export const usersReducer =  usersSlice.reducer;