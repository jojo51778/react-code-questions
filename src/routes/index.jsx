import Counter from '../views/Counter.jsx';
import Timeout from '../views/Timeout.jsx';

const routes = [
  { path: '/counter', element: <Counter />, name: 'Counter' },
  { path: '/useTimeout', element: <Timeout />, name: 'UseTimeout' },
];

export default routes;
