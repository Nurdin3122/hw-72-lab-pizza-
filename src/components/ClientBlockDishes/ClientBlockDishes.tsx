import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner.tsx";
import {fetchDishes} from "../../Redux/Slices/Slice.ts";
import {AppDispatch} from "../../Redux/store.ts";
import {Link} from "react-router-dom";
import {addToCart} from "../../Redux/Slices/OrderSlice.ts";

const ClientBlockDishes = () => {
    const dispatch:AppDispatch = useDispatch();
    const loading = useSelector(state => state.dishes.loading);
    const dishes = useSelector(state => state.dishes.dishes);
    const total = useSelector(state => state.orders.total);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [fetchDishes]);

    const addDishOrder = (dish) => {
        console.log(dish)
      dispatch(addToCart(dish))
    }

    return (
        <>
            {loading ? <Spinner/> :(
                dishes.map(dish => (
                    <div key={dish.id} className="d-flex  mt-4 border" onClick={() => addDishOrder(dish)}>
                        <div>
                            <img className="img" src={dish.Dish.image} alt="image"/>
                        </div>
                        <div className="block-body ms-3 d-flex flex-column mt-auto mb-auto">
                            <h4 className="card-title mt-2">{dish.Dish.title}</h4>
                            <h6 className="mt-3">Price: {dish.Dish.price}</h6>
                        </div>
                    </div>
                ))
            )}

            <div>
                <p>Order total:{total}</p>
                <Link to="/checkout" className="btn btn-success">
                    Chechout
                </Link>

            </div>
        </>
    );
};

export default ClientBlockDishes;