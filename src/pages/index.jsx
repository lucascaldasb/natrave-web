import { useLocalStorage } from 'react-use'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Home } from './Home/index';
import { Login } from './Login/index';
import { Signup } from './Signup/index';
import { Dashboard } from "./Dashboard";
import { Profile } from "./Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/:username",
        element: <Profile />,
    },
]);

export const Router = () => {

  return <RouterProvider router={router} />
}


