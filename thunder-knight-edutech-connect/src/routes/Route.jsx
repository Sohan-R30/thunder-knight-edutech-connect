import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Shared/Error";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Main from "../layout/Main";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }


        ]
    }
])

export default route;