import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Listing, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className="loader" />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/patientListing/in-patient",
        element: <Listing />,
      },
      {
        path: "/patientListing/out-patient",
      },
      {
        path: "/patientListing/medicine-billing",
      },
      {
        path: "/patientListing/rooms-available",
      },
      {
        path: "/notifications",
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
