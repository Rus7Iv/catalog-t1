import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/main"
import AdminPage from "../pages/admin"
import AdminProductPage from "../pages/admin-product"

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
