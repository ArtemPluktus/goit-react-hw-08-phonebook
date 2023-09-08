import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import filterSlice from "./filterSlice.js";
import { contactsApi } from './contactsSlice.js';
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import authSlice from "./authSlice.js"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const customMiddleware = contactsApi.middleware;

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    customMiddleware,
];


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice,

    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);