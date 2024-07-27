import React, {useState} from 'react';
import {AppDispatch} from "../../Redux/store/store.ts";
import {useDispatch} from "react-redux";
import {DishMutation} from "../../type.ts";
import {useNavigate} from "react-router-dom";
import {fetchDishes, fetchPostDish} from "../../Redux/Slices/Slice.ts";
import "./AddNewDish.css"



const emptyState:DishMutation = {
    title:"",
    price:"",
    image:"",
}

const AddNewDish = () => {
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [newDish, setNewDish] = useState<DishMutation>(emptyState);


    const onFormSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        await dispatch(fetchPostDish(newDish));
        await dispatch(fetchDishes());
        navigate('/dishes');
    }

    const changeForm = (event: React.ChangeEvent<HTMLInputElement >) => {
        setNewDish((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
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
        </>
    );
};

export default AddNewDish;