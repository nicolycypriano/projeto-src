import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

const Router = () => {
    <BrowserRouter>
        <AdminProtectedRoute exact path="/home" component={AdminHome} />
    </BrowserRouter>
}