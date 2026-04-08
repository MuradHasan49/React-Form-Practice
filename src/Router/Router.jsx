import { createBrowserRouter } from "react-router";
import MainOutlet from "../Outlet/MainOutlet";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainOutlet,
        children: [
            {index:true , Component: Home}
        ]
    }
])