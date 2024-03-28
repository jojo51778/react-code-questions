import { useRoutes, Link } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  const views = useRoutes(routes);
  return (
    <>
      {routes.map((route, index) => (<Link key={route.path} to={route.path}>{index+1}. {route.name}</Link>))}
      {views}
    </>
  );
}

export default App;
