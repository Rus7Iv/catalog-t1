import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import AdminPage from "../pages/MainPage/Admin/AdminPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
])
