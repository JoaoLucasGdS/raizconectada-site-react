import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import GpsPage from "./pages/GpsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import FormsPage from "./pages/FormsPage";

const router = createBrowserRouter([

  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/gps",
    element: <GpsPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/form",
    element: <FormsPage />,
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;