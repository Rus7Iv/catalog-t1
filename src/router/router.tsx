import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import AdminPage from "../pages/AdminPage/AdminPage"
import AdminProductPage from "../pages/AdminProductPage/AdminProductPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/admin-product",
        element: <AdminProductPage />,
    },
])
