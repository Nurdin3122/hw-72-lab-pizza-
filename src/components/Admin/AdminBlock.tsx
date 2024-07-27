import React from 'react';
import {Link} from "react-router-dom";
import "./AdminBlock.css";

const AdminBlock = () => {
    return (
        <div className="d-flex ">

            <Link to="/dishes" type="button" className="btn btn-primary ms-auto me-5 admin-mt">
            <div className="block-admin">
               <p>Dishes</p>
            </div>
            </Link>



            <Link to="/orders" type="button" className="btn btn-secondary me-auto admin-mt">
            <div className=" block-admin">
               <p>Orders</p>
            </div>
            </Link>

        </div>
    );
};

export default AdminBlock;