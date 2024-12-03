import React, { useState, useEffect } from "react";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import "./header.css";
import { User } from "@consta/uikit/User";
import { useSelector } from 'react-redux';

const getStyleForNavLink = ({ isActive }) => ({
    boxShadow: isActive ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
    borderRadius: isActive ? "20px" : "none",
});

const Header = () => {
    const userId = useSelector((state) => state.user.user);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                setIsAuthenticated(true);
                setUserData(parsedUser);
            } catch (e) {
                console.error("Failed to parse user data:", e);
                setIsAuthenticated(false);
                setUserData(null);
            }
        } else {
            setIsAuthenticated(false);
            setUserData(null);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUserData(null);
        navigate(AppRoute.main);
    };


    return (
        <Layout className="header">
            <Text lineHeight="m" view="primary" className="header_title">
                @Денисова Арина
            </Text>
            <Layout className="header_nav">
                <Layout className="header_nav-buttons">
                    <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                        <Button className="header-text" label="Главная" view="clear" form="round" />
                    </NavLink>
                    <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button className="header-text" label="Услуги" view="clear" form="round" />
                    </NavLink>
                    {isAuthenticated && (
                        <NavLink to={`/user/${userId.id}`} style={getStyleForNavLink}>
                            <div className='header_user'>
                                <User
                                    size="l"
                                    avatarUrl={userData.image}
                                    name={`${userData.firstName}`}
                                    className="header_user_info"
                                />
                            </div>
                        </NavLink>
                    )}
                </Layout>
                <Layout className="header_registration">
                    {isAuthenticated ? (
                        <Button
                            className="header-text"
                            label="Выход"
                            view="primary"
                            onClick={handleLogout}
                        />
                    ) : (
                        <NavLink to={AppRoute.auth}>
                            <Button className="header-text" label="Войти" view="primary" />
                        </NavLink>
                    )}
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;
