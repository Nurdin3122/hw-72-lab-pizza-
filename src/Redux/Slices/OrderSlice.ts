import {createSlice, PayloadAction,} from '@reduxjs/toolkit';
import {Order} from "../../type.ts";



interface OrdersState {
    orders: Order[];
    total:number
    loading: boolean;
    error: boolean;
}

const initialState: OrdersState = {
    orders: [],
    loading: false,
    error: false,
    total:0,
};



const OrdersSlice = createSlice<OrdersState>({
    name:"orders",
    initialState,
    reducers:{
        addToCart: (state:OrdersState, action: PayloadAction<Order>) => {
            const existingItem = state.orders.find(order => order.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.orders.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.Dish.price;
    },
        // total: (state:OrdersState, action: PayloadAction<number>) => {
        //     state.total = action.payload
        // },
}});

export const { addToCart, } = OrdersSlice.actions;

export const OrdersReducer = OrdersSlice.reducer;


