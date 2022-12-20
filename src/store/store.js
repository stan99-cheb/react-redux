import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const loggerMiddleware = store => next => action => {
    console.log(store.getState());
    return next(action);
};

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});
