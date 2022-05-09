import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
})

// Infer the Rootstate and AppDispatch types 
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
