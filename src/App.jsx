import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import GpsPage from "./pages/GpsPage";
import FormsPage from "./pages/FormsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/gps",
    element: <GpsPage />,
  },
  {
    path: "/forms",
    element: <FormsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
