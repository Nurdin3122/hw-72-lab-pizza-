import React from 'react';
import {useSelector} from "react-redux";

const Checkout = () => {
    const orders = useSelector(state => state.orders.orders);
    console.log(orders)
    return (
        <div>
            {orders.map(order => (
                <div key={order.id} className="border ">
                        <div className="card-body">
                            <p className="card-title text-center">{order.Dish.title}  x<span
                                className="card-text text-center">{order.quantity}</span></p>
                            <p className="card-text text-center">{order.Dish.price}</p>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default Checkout;