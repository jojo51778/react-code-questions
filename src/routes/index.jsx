import Counter from '../views/react/Counter.jsx';
import Timeout from '../views/react/Timeout.jsx';
import FirstRender from '../views/react/FirstRender.jsx';
import SWR from '../views/react/SWR.jsx';
import Previous from '../views/react/Previous.jsx';
import Hover from '../views/react/Hover.jsx';
import Algorithm from '../views/algorithm/index.jsx';

const routes = [
  { path: '/counter', element: <Counter />, name: 'Counter' },
  { path: '/useTimeout', element: <Timeout />, name: 'UseTimeout' },
  { path: '/useIsFirstRender', element: <FirstRender />, name: 'UseIsFirstRender' },
  { path: '/useSWR', element: <SWR />, name: 'useSWR' },
  { path: '/usePrevious', element: <Previous />, name: 'usePrevious' },
  { path: '/useHover', element: <Hover />, name: 'useHover' },
  { path: '/algorithm', element: <Algorithm />, name: 'algorithm' },
];

export default routes;
