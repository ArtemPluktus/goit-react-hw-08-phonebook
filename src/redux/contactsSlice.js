import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authSelectors from './authSelectors';

console.log(authSelectors.getUserToken);

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
            headers: { Authorization: `${authSelectors.getUserToken}` }
        }),
        createContact: builder.mutation({
            query: (newContact) => ({
                url: '/contacts',
                method: "POST",
                body: newContact
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});

export const { useFetchContactsQuery, useCreateContactMutation, useDeleteContactMutation } = contactsApi;