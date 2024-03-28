import { useRoutes } from 'react-router-dom';
import Counter from './views/Counter.jsx';
const routes = useRoutes([
  {
    path: '/',
    element: <Counter />,
    children: [{ path: '/counter', element: <Counter /> }],
  },
  { path: '/counter', element: <Counter /> },
]);

import './App.css';

function App() {
  return (
    <>
      <div>{routes}</div>
    </>
  );
}

export default App;
