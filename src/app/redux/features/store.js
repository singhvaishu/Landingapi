"use client";

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        // other slices if any
    },
});

export default store;
