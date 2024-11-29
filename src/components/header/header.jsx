import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { NavLink } from "react-router";
import { AppRoute } from "../../const";


const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {}
    ;
const Header = () => {
    return (
        <div>
            <Layout className="header">
                <Text lineHeight="m" view="primary" className="header_title">
                    Денисова Арина
                </Text>
                <Layout className="header_nav">
                    <Layout className="header_nav-buttons">
                        <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                            <Button label="Главная" view="clear" form="round" />
                        </NavLink>
                        <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                            <Button label="Услуги" view="clear" form="round" />
                        </NavLink>
                    </Layout>
                    <Layout className="header_registration">
                        <NavLink to={AppRoute.serviceDetails}>
                            <Button label="Регистрация" view="primary" />
                        </NavLink>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default Header;
