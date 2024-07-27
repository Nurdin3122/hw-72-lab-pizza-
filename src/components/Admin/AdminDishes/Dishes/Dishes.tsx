import React, {useEffect} from 'react';
import {fetchDelete, fetchDishes} from "../../../../Redux/Slices/Slice.ts";
import {AppDispatch} from "../../../../Redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../../Spinner/Spinner.tsx";
import {Link} from "react-router-dom";
import "./Dishes.css"


const Dishes = () => {
    const dispatch:AppDispatch = useDispatch();
    const loading = useSelector(state => state.dishes.loading);
    const dishes = useSelector(state => state.dishes.dishes);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [fetchDishes]);

    const Delete = async (id:string) => {
        await dispatch(fetchDelete(id));
        await dispatch(fetchDishes());
    }


    return (
        <>
            {loading ? <Spinner/> :(
                dishes.map(dish => (
                        <div key={dish.id} className="d-flex  mt-4 border">
                            <div>
                                <img className="img" src={dish.Dish.image} alt="image"/>
                            </div>
                            <div className="block-body ms-3 d-flex flex-column">
                                <h4 className="card-title mt-2">{dish.Dish.title}</h4>
                                <h6 className="mt-3">Price: {dish.Dish.price}</h6>
                                <div className="block-btn mt-3">
                                    <Link to={`/edit-dish/${dish.id}`} type="button" className="btn btn-primary me-2">Edit</Link>
                                    <button type="button" className="btn btn-danger" onClick={() => Delete(dish.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                ))
            )}
        </>
    );
};

export default Dishes;