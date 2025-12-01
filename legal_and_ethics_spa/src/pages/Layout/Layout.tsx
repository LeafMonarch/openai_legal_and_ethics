import React from "react";
import SideNav from "../../components/SideNav/SideNav";

import "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <div className="layout__sidenav">
                <SideNav />
            </div>

            <main className="layout__content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
