import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact } from './Contact/Contact.tsx'
import { Home } from './Home/Home.tsx'
import { About } from './About/About.tsx'
import { Product } from './Product/Product.tsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/home',
      element: <Home />
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
