import { useRoutes } from 'react-router-dom';
import Counter from '../views/Counter.jsx';

const routes = useRoutes([
  {
    path: '/',
    element: <Counter />,
    children: [{ path: '/counter', element: <Counter /> }],
  },
  { path: '/counter', element: <Counter /> },
]);

export default routes;
