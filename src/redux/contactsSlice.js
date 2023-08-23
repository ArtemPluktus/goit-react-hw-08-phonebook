import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64df823e71c3335b2582bdde.mockapi.io/api/' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact']
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