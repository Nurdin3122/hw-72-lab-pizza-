import {configureStore} from "@reduxjs/toolkit";
import {DishesReducer} from "./Slices/Slice.ts";
import {OrdersReducer} from "./Slices/OrderSlice.ts";

export const store = configureStore({

    reducer: {
        dishes:DishesReducer,
        orders:OrdersReducer,
    }

});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;