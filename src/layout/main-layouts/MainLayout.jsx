import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main style={{ minHeight: "75dvh" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 