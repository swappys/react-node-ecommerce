import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import orders from "./admin/Orders";
import profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import updateProduct from "./admin/UpdateProduct";


const Routes = () => {
    return (

        <BrowserRouter>
          
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/shop" exact component={Shop}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <PrivateRoute path ="/user/dashboard" exact component={Dashboard}></PrivateRoute>
                <AdminRoute path = "/admin/dashboard" exact component={AdminDashboard}></AdminRoute>
                <AdminRoute path = "/create/category" exact component={AddCategory}></AdminRoute>
                <AdminRoute path = "/create/product" exact component={AddProduct}></AdminRoute>
                <AdminRoute path = "/admin/orders" exact component={orders}></AdminRoute>
                <Route path="/product/:productId" exact component={Product}></Route>
                <PrivateRoute path ="/user/dashboard" exact component={Dashboard}></PrivateRoute>
                <Route path="/cart" exact component={Cart}></Route>
                <PrivateRoute path ="/profile/:userId" exact component={profile}></PrivateRoute>
                <PrivateRoute path ="/admin/products" exact component={ManageProducts}></PrivateRoute>
                <AdminRoute path = "/admin/product/update/:productId" exact component={updateProduct}></AdminRoute>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;