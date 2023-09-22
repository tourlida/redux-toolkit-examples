import {SerializedError, createSlice} from '@reduxjs/toolkit';
interface Request{
    id:number;
    status:string;
}
export interface RequestState{
    data : Request[];
    isLoading:boolean;
    error: null | SerializedError;
}

const initialUsersState:RequestState = {
    data:[],
    isLoading:false,
    error: null
}

const requestsSlice = createSlice({
    name:'requests',
    initialState: initialUsersState,
    reducers:{

    },
    extraReducers(builder) {
        //Fetch user
        /*builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.error;
        });*/
    },
});

export const requestsReducer =  requestsSlice.reducer;