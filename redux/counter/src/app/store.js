//redux store = container for js apps, stores the whole state of the app in an immutable object tree; single store is recommended

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})