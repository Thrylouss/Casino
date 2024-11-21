import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CasesPage from "../pages/CasesPage";
import MinesPage from "../pages/MinesPage";
import RouteTemplate from "../template/RouteTemplate.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RouteTemplate/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/cases',
                element: <CasesPage/>
            },
            {
                path: '/mines',
                element: <MinesPage/>
            }
        ]
    }
])