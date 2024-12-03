import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRoute } from "../const";

const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const user = useSelector((state) => state.user.user);

    // Проверка авторизации и наличия корректного пользователя
    if (!isAuth || !user || !user.id) {
        return <Navigate to={AppRoute.main} replace />;
    }

    return children;
};

export default ProtectedRoute;
