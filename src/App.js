
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Component/Home/Home'
import Order from './Component/Order/Order'
import Login from './Component/Login/Login'
import Registrar from './Component/Registrar/Registrar'
import PrivateRouters from './PrivateRoute/PrivateRouters';
import { Toaster } from 'react-hot-toast';
function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main> , children:[
        {
          path:'/', element: <PrivateRouters><Home></Home></PrivateRouters>
        },
        {
          path:'/home', element: <PrivateRouters><Home></Home></PrivateRouters>
        },
        {
          path:'/order', element: <PrivateRouters><Order></Order></PrivateRouters>
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
      <Toaster></Toaster>
    </div>
  );
}

export default App;
