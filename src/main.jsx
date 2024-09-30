import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import News from './routes/News/News.jsx'
import News1 from './routes/News/NewsComplete/MulherNews.jsx'
import Classifica from './routes/Classificacao/Classificacao.jsx'
import PilotoEquipe from './routes/PilotoEquipe/PilotoEquipe.jsx'
import Corrida from './routes/Corrida/Corrida.jsx'
import Bet from './routes/Bet/BetPage.jsx'
import Shop from './routes/Shop/Shop.jsx'
import Quiz from './routes/Quiz/Quiz.jsx'
import Ajuda from './routes/FAQChatbot/FAQChatbot.jsx'

import Stream from './routes/ChatPage/StreamingSelection.jsx'
import StreamFormulaE from './routes/ChatPage/StreamF-E/StreamFormulaE.jsx'
import StreamMahindra from './routes/ChatPage/StreamMahindra/StreamingPage.jsx'
import StreamPorsche from './routes/ChatPage/StreamPorsche/StreamPorsche.jsx'
import StreamMaserati from './routes/ChatPage/StreamMaserati/StreamMaserati.jsx'
import StreamVitor from './routes/ChatPage/StreamVitor/StreamVitor.jsx'
import StreamGabriel from './routes/ChatPage/StreamGabriel/StreamGabriel.jsx'
import StreamNathan from './routes/ChatPage/StreamNathan/StreamNathan.jsx'

import Register from './routes/Register/Register.jsx'
import Profile from './routes/Profile/Profile.jsx'
import Settings from './routes/Settings/Settings.jsx'
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

      { path: "/Bet", element: <Bet/>},

      { path: "/Shop", element: <Shop/>},

      { path: "/Quiz", element: <Quiz/>},

      { path: "/Ajuda", element: <Ajuda/>},
      
      { path: "/Stream", element: <Stream/>  },
      { path: "/Stream/StreamMahindra", element: <StreamMahindra/>  },
      { path: "/Stream/StreamFormulaE", element: <StreamFormulaE/>  },
      { path: "/Stream/StreamPorsche", element: <StreamPorsche/>  },
      { path: "/Stream/StreamMaserati", element: <StreamMaserati/>  },
      { path: "/Stream/StreamVitor", element: <StreamVitor/> },
      { path: "/Stream/StreamGabriel", element: <StreamGabriel/> },
      { path: "/Stream/StreamNathan", element: <StreamNathan/> },

      { path: "/News", element: <News/>  },
      { path: "/News/0001", element: <News1/>  },

      { path: "/Classifica", element: <Classifica/>  },
      { path: "/PilotoEquipe", element: <PilotoEquipe/> },
      { path: "/Corrida", element: <Corrida/>},

      { path: "/Register", element: <Register/>},
      { path: "/Profile", element: <Profile/>},
      { path: "/Settings", element: <Settings/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
