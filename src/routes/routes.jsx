import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import BaseLayout from "../BaseLayout";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        
        children: [
            {
                index: true,
                Component: HomePage
            },
            ,
            {
                path: "/login",
                Component: LoginPage
            },
            {
                path: "/profile",
                element: <PrivateRoutes><ProfilePage></ProfilePage></PrivateRoutes>
            }
        ]
    },
    {
                path: "/project-details/:id",
                Component: ProjectDetails
            },
]);

export default router;