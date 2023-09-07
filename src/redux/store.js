import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice.js";
import { contactsApi } from './contactsSlice.js';
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import authSlice from "./authSlice.js"

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware]
});

setupListeners(store.dispatch);