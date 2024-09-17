import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Todo from './screens/Todo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/Todo',
        element : <Todo/>
      },
      {
        path : '/Login',
        element : <Login/>
      },
      {
        path : '/Register',
        element : <Register/>
      },
      {
        path : '*',
        element : () => <h1>Page Not Found</h1> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>

)