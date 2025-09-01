import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GpsPage from "./pages/GpsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import FormsPage from "./pages/FormsPage";

import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([{

    path: "/",
    element: <RootLayout />,
    
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "gps",
        element: <GpsPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "form",
        element: <FormsPage />,
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
