import React from "react";
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { NavLink } from "react-router";
import { AppRoute } from "../../const";
import './footer.css';

const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {}
    ;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Layout className='footer'>
            <Layout className="footer_nav">
                <Layout className="footer_nav-buttons">
                    <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                        <Button className="footer-text" label="Главная" view="clear" form="round" />
                    </NavLink>
                    <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button className="footer-text" label="Услуги" view="clear" form="round" />
                    </NavLink>
                </Layout>
                <Layout className="footer_registration">
                    <NavLink to={AppRoute.auth}>
                        <Button className="footer-text" label="Регистрация" view="primary" />
                    </NavLink>
                </Layout>
            </Layout>
            <Text lineHeight="m" view="primary" className="footer_title">
                © {currentYear} Денисова Арина
            </Text>
        </Layout>
    );
};

export default Footer;
