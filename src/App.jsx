import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GpsPage from "./pages/GpsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";

import RootLayout from "./components/RootLayout";

import "./index.css"
import RecipesPage from "./pages/RecipesPage";

const router = createBrowserRouter([{

    path: "/",
    element: <RootLayout />,
    
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "gps",
        element: <GpsPage />,
      },
      {
        path: "reviews/:id",
        element: <ReviewsPage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
