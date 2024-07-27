export interface Dish{
    title:string;
    price:string;
    image:string;
    id:string
}

export type ApiDish = Omit<Dish, 'id'>;

export interface ApiDishes {
    [id: string]: ApiDish;
}

export interface DishMutation{
    title:string;
    price:string;
    image:string;
}

export interface Order {
    id: string;
    title: string;
    price: number;
    quantity: number;
}
