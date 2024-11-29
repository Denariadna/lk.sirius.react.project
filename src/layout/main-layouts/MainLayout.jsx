import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { NavLink } from "react-router";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 