
import './App.css'
import Layout from "./container/Loyaut/Loyaout.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import AdminBlock from "./components/Admin/AdminBlock.tsx";
import AdminDishes from "./components/Admin/AdminDishes/AdminDishes.tsx";
import AdminOrders from "./components/Admin/AdminOrders/AdminOrders.tsx";
import AddNewDish from "./components/AddNewDish/AddNewDish.tsx";
import EditDish from "./components/EditDish/EditDish.tsx";
import Checkout from "./components/Checkout/Checkout.tsx";

function App() {
  return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<AdminBlock/>}/>
                <Route path="/dishes" element={<AdminDishes/>}/>
                <Route path="/orders" element={<AdminOrders/>}/>
                <Route path="/add-new-dish" element={<AddNewDish/>}/>
                <Route path="/edit-dish/:id" element={<EditDish/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<h3>sorry, there is not such page</h3>}/>
            </Routes>
        </Layout>
    </>
  )
}

export default App
