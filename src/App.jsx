import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  const views = useRoutes(routes);
  return views;
}

export default App;
