import { createBrowserRouter } from "react-router";
import MainOutlet from "../Outlet/MainOutlet";
import Home from "../Pages/Home/Home";
import OnSubmit from "../Pages/Form/OnSubmit";
import FormAction from "../Pages/Form/FormAction";
import Controlled from "../Pages/Form/Controlled";
import Uncontrolled from "../Pages/Form/Uncontrolled";
import HookForm from "../Pages/Form/HookForm";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainOutlet,
        children: [
            { index: true, Component: Home },
            {path:"/onsubmit" ,Component: OnSubmit},
            {path:"/formaction" ,Component: FormAction},
            {path:"/controlled" ,Component: Controlled},
            {path:"/uncontrolled" ,Component: Uncontrolled},
            {path:"/hookform" ,Component: HookForm},
    
          ]
    }
])