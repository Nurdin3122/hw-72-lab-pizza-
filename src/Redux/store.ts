import {configureStore} from "@reduxjs/toolkit";
import {DishesReducer} from "./Slices/Slice.ts";

export const store = configureStore({

    reducer: {
        dishes:DishesReducer,
    }

});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;