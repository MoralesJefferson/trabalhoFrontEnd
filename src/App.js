
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Detalhes from './Pages/Detalhes';

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/detalhes/:id',
      element:<Detalhes/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
