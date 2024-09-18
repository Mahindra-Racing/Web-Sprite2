import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
    {
      path: "/", element: <Home/>,
    },
    {
      path: "/contact", element: <Contact/>,
    },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
