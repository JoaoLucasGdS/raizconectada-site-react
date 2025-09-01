import { Outlet, useLocation } from "react-router-dom";

import RaizHeader from "./RaizHeader";

function RootLayout() {

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <>
        <RaizHeader transparent={isHomePage} />
        <main>
            <Outlet />
        </main>
        </>
    );
}

export default RootLayout;