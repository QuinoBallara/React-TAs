import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Contact } from './Contact/Contact.tsx'
import { Home } from './Home/Home.tsx'
import { About } from './About/About.tsx'
import { Product } from './Product/Product.tsx'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState<string>("");

  type ProtectedRouteProps = {
    user: any;
    children: any;
    redirectPath?: string
  }

  const ProtectedRoute = ({
    user,
    children,
    redirectPath = '/home'
  }: ProtectedRouteProps) => {
    if (user !== "admin") {
      return <Navigate to={redirectPath} replace />
    }
    return children
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home onInputChange={setUser} />,
    },
    {
      path: '/contact',
      element: <ProtectedRoute user={user}><Contact /></ProtectedRoute>
    },
    {
      path: '/about',
      element: <ProtectedRoute user={""}><About /></ProtectedRoute>
    },
    {
      path: '/home',
      element: <Home onInputChange={setUser} />
    },
    {
      path: '/product/:id',
      element: <Product />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
