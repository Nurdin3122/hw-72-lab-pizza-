import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiDish, ApiDishes, Dish} from "../../type.ts";
import {Simulate} from "react-dom/test-utils";
import axiosApi from "../../axiosApi.ts";
import {RootState} from "../store.ts";


interface Dishes {
    dishes:Dish[];
    dish?:Dish | null;
    loading:boolean;
    error:boolean
}

const initialState:Dishes = {
    dishes:[],
    dish:null,
    loading:false,
    error:false,
}

export const fetchDishes = createAsyncThunk<Dish[]>(
    "dishes/fetchDishes",
    async () => {
        const response = await axiosApi.get<ApiDishes[] | null>(`/pizza.json`);
        const dishes = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }));
        return dishes ?? [];
    }
);

export const fetchDish = createAsyncThunk<Dish,string>(
    "dishes/fetchDish",
    async (id:string) => {
        const response = await axiosApi.get<ApiDish | null>(`/pizza/${id}.json`);
        if (response.data) {
            return { ...response.data, id};
        } else {
            return console.log("Not find");
        }
    }
)

export const fetchPostDish = createAsyncThunk(
    "dishes/fetchPostDish",
    async (Dish:string) => {
        const response = await axiosApi.post<ApiDish | null>('/pizza.json',{Dish});
        return response.data;
    }
);

export const fetchPutDish = createAsyncThunk(
    "dishes/fetchPut",
    async ({id,Dish}) => {
        const response = await axiosApi.put<ApiDish | null>(`/pizza/${id}.json`, {Dish});
        return response.data;
    }
)

export const fetchDelete = createAsyncThunk<string,string>(
    "dishes/fetchDelete",
    async (id:string) => {
        await axiosApi.delete(`/pizza/${id}.json`);
        return id;
    }
);



const DishesSlice = createSlice<Dishes>({
    name:"dishes",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchDishes.pending,(state) => {
            state.loading = true;
            state.error = false
        });
        builder.addCase(fetchDishes.fulfilled,(state,action:PayloadAction<Dish[]>) => {
            state.loading = false;
            state.dishes = action.payload;
        });
        builder.addCase(fetchDishes.rejected,(state) => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(fetchDish.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchDish.fulfilled, (state, action: PayloadAction<Dish>) => {
            state.loading = false;
            state.dish = action.payload;
        });
        builder.addCase(fetchDish.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(fetchDelete.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchDelete.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.dishes = state.dishes.filter(dish => dish.id !== action.payload);
        });
        builder.addCase(fetchDelete.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });


        builder.addCase(fetchPostDish.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchPostDish.fulfilled, (state, action: PayloadAction<Dish>) => {
            state.loading = false;
            state.dish = action.payload;
        });
        builder.addCase(fetchPostDish.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });


        builder.addCase(fetchPutDish.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchPutDish.fulfilled, (state, action: PayloadAction<Dish>) => {
            state.loading = false;
            state.dish = action.payload
        });
        builder.addCase(fetchPutDish.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }
});

export const DishesReducer = DishesSlice.reducer;