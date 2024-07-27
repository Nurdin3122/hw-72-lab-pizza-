import React, {useEffect, useState} from 'react';
import {AppDispatch} from "../../Redux/store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {DishMutation} from "../../type.ts";
import {useNavigate, useParams} from "react-router-dom";
import {fetchDish, fetchDishes, fetchPutDish} from "../../Redux/Slices/Slice.ts";
import Spinner from "../Spinner/Spinner.tsx";



const emptyState:DishMutation = {
    title:"",
    price:"",
    image:"",
}

const EditDish = () => {
    const {id} = useParams();
    const dish = useSelector(state => state.dishes.dish);
    const initialState = dish ? {...dish.Dish} : emptyState;
    const loading = useSelector(state => state.dishes.loading);
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [newDish, setNewDish] = useState<DishMutation>(initialState);

    useEffect(() => {
        if (id) {
            dispatch(fetchDish(id));
        }
    }, [id]);



    const onSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        await dispatch(fetchPutDish({id,Dish:newDish}));
        await dispatch(fetchDishes());
        navigate('/dishes');
    }

    const changeForm = (event: React.ChangeEvent<HTMLInputElement >) => {
        setNewDish((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    if (!dish || !dish.Dish) {
        return null;
    }

    return (
        <>
            {loading ? <Spinner/> : (
                <form onSubmit={onSubmit}>
                    <p>{id}</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                        <input type="text"
                               className="form-control"
                               id="title" name="title"
                               required
                               value={newDish.title}
                               onChange={changeForm}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                        <input type="number"
                               className="form-control"
                               id="price"
                               name="price"
                               required
                               aria-describedby="emailHelp"
                               value={newDish.price}
                               onChange={changeForm}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Food's image</label>
                        <input type="text"
                               className="form-control"
                               id="image"
                               name="image"
                               required
                               value={newDish.image}
                               onChange={changeForm}
                        />
                    </div>

                    <div className="mb-3">
                        <p className="form-text">image:</p>
                        <img className="block-food-img" src={`${newDish.image}`} alt="there is not a picture"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}
        </>
    );
};

export default EditDish;