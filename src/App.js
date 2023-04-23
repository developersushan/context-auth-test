
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Component/Home/Home'
import Order from './Component/Order/Order'
import Login from './Component/Login/Login'
import Registrar from './Component/Registrar/Registrar'
function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main> , children:[
        {
          path:'/', element: <Home></Home>
        },
        {
          path:'/home', element: <Home></Home>
        },
        {
          path:'/order', element: <Order></Order>
        },
        {
          path:'/login', element: <Login></Login>
        },
        {
          path:'/registrar', element: <Registrar></Registrar>
        },

      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
