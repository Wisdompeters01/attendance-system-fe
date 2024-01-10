import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/common/Layout";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/Register";


export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: '/register',
        element: <Register/>
    }
]);