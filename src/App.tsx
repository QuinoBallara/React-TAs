import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact } from './Contact/Contact.tsx'
import { Home } from './Home/Home.tsx'
import { About } from './About/About.tsx'

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
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
