import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import News from './routes/News/News.jsx'
import News1 from './routes/News/NewsComplete/MulherNews.jsx'
import ChatPage from './routes/ChatPage/ChatPage.jsx'
import Classifica from './routes/Classificacao/Classificacao.jsx'
import PilotoEquipe from './routes/PilotoEquipe/PilotoEquipe.jsx'
import Corrida from './routes/Corrida/Corrida.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home/>  },
      { path: "/Stream", element: <ChatPage/>  },
      { path: "/News", element: <News/>  },
      { path: "/News/0001", element: <News1/>  },
      { path: "/Classifica", element: <Classifica/>  },
      { path: "/PilotoEquipe", element: <PilotoEquipe/> },
      { path: "/Corrida", element: <Corrida/>}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
