import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layouts/Main/Main";
import mainRoute from "./MainRoute/mainRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: mainRoute
    },
    {
        path: '*',
        element: <>Нет такой страницы...</>
    }
])

