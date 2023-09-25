import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { User } from '../models';
import { faker } from '@faker-js/faker';

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

export const { useFetchAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export {albumsApi};
