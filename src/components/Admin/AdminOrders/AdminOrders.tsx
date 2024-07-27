import React from 'react';
import {Link} from "react-router-dom";

const AdminOrders = () => {
    return (
        <div>
            <Link to="/admin" className="btn btn-danger">Exit</Link>
        </div>
    );
};

export default AdminOrders;