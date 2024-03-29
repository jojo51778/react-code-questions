import Counter from '../views/Counter.jsx';
import Timeout from '../views/Timeout.jsx';
import FirstRender from '../views/FirstRender.jsx';

const routes = [
  { path: '/counter', element: <Counter />, name: 'Counter' },
  { path: '/useTimeout', element: <Timeout />, name: 'UseTimeout' },
  { path: '/useIsFirstRender', element: <FirstRender />, name: 'UseIsFirstRender' },

];

export default routes;
