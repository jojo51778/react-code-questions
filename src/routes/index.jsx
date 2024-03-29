import Counter from '../views/react/Counter.jsx';
import Timeout from '../views/react/Timeout.jsx';
import FirstRender from '../views/react/FirstRender.jsx';

const routes = [
  { path: '/counter', element: <Counter />, name: 'Counter' },
  { path: '/useTimeout', element: <Timeout />, name: 'UseTimeout' },
  { path: '/useIsFirstRender', element: <FirstRender />, name: 'UseIsFirstRender' },

];

export default routes;
