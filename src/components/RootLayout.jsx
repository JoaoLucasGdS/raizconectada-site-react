import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import RaizHeader from "./RaizHeader";

function RootLayout() {

    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isProfilePage = location.pathname === "/profile";

    //setting up body.home so we can make the background color on homepage green using the homepage css
    //Doing this since without it the HomePage Form will look like shit having a white background and all
    useEffect(() => {
        if (isHomePage) {
            document.body.classList.add('home');
        } else {
            document.body.classList.remove('home');
        }

        return () => {
            document.body.classList.remove('home');
        };
    }, [isHomePage]);

    useEffect(() => {
        if (isProfilePage) {
            document.body.classList.add('profile');
        } else {
            document.body.classList.remove('profile');
        }
        
        return () => {
            document.body.classList.remove('profile');
        };
    }, [isProfilePage]);


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