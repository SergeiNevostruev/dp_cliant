import { RouteObject, useLocation } from 'react-router-dom';
import MdEditor from '../../../lib/mdeditor/MdEditor';
import FlowDraw from '../../../lib/reactflow';
import { Xl } from '../../../lib/sheetjs/Xl';
import { menuRouteKey } from './menuRouteKey';

const PathComponent = () => {
  let location = useLocation();

  return (
    <>
      <h1>Main</h1>
      {location.pathname}
    </>
  );
};

const mainRoute: RouteObject[] = [
  {
    path: menuRouteKey[0],
    element: <FlowDraw />,
  },
  {
    path: menuRouteKey[1],
    element: <MdEditor />,
  },
  {
    path: menuRouteKey[2],
    element: <Xl />,
  },
];

export default mainRoute;
