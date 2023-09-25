import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { User } from '../slices/usersSlice';

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
            }
        })
    }
}
});

export const { useFetchAlbumsQuery } = albumsApi;
export {albumsApi};
