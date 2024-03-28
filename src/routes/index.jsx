import Dashboard from '../views/Dashboard.jsx';
import Counter from '../views/Counter.jsx';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  { path: '/counter', element: <Counter /> },
];

export default routes;
