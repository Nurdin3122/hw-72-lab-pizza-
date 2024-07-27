import React from 'react';
import {Link} from "react-router-dom";
import Dishes from "./Dishes/Dishes.tsx";

const AdminDishes = () => {
    return (
        <>
            <div className="d-flex mt-3">
                <Link to="/admin" className="btn btn-danger">Exit</Link>
                <Link to="/add-new-dish" className="btn btn-success ms-auto">Add new Dish</Link>
            </div>
            <div className="mt-5">
                <h2 className="text-center">Dishes</h2>
                <div className="">
                    <Dishes/>
                </div>

            </div>
        </>
    );
};

export default AdminDishes;