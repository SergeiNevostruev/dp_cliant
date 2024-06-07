import { RouteObject, useLocation } from "react-router-dom";
import { menuRouteKey } from "./menuRouteKey";

const PathComponent = () => {
    let location = useLocation();

    return (
    <>
        <h1>Main</h1>
        {location.pathname}
    </>);
}

const mainRoute: RouteObject[] = [
    {
        path: menuRouteKey[0],
        element: <PathComponent/>
    },
    {
        path: menuRouteKey[1],
        element: <PathComponent/>
    },
    {
        path: menuRouteKey[2],
        element: <PathComponent/>
    }
];

export default mainRoute;