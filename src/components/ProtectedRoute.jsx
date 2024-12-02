import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRoute } from "../const";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user);

    // Если пользователь не авторизован, перенаправляем на страницу авторизации
    if (!user && !localStorage.getItem("user")) {
        return <Navigate to={AppRoute.auth} />;
    }

    return children;
};

export default ProtectedRoute;
