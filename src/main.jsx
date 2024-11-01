import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'

import News from './routes/News/News.jsx'
import News1 from './routes/News/NewsComplete/New1/MulherNews.jsx'
import News2 from './routes/News/NewsComplete/New2/New2.jsx'
import News3 from './routes/News/NewsComplete/New3/New3.jsx'
import News4 from './routes/News/NewsComplete/New4/New4.jsx'
import News5 from './routes/News/NewsComplete/New5/New5.jsx'

import Dashboard from './routes/Dashboard/Dashboard.jsx'
import Classifica from './routes/Classificacao/Classificacao.jsx'
import PilotoEquipe from './routes/PilotoEquipe/PilotoEquipe.jsx'
import Corrida from './routes/Corrida/Corrida.jsx'
import PilotCard from './routes/PilotCard/PilotCard.jsx'

import Bet from './routes/Bet/BetPage.jsx'

import Shop from './routes/Shop/Shop.jsx'
import Marketplace from './routes/Shop/Marketplace.jsx'
import RegisterShop from './routes/Shop/RegisteShop.jsx'
import Carrinho from './routes/Shop/Carrinho.jsx'

import Quiz from './routes/Quiz/Quiz.jsx'
import Silhouette from './routes/SilhouetteGame/SilhouetteGame.jsx'
import Ajuda from './routes/FAQChatbot/FAQChatbot.jsx'
import NotificationsPage from './routes/NotificationsPage/NotificationsPage.jsx'

import Stream from './routes/ChatPage/StreamingSelection.jsx'
import StreamRegister from './routes/ChatPage/RegisterStreamerPage/RegisterStreamerPage.jsx'
import MakeStream from './routes/MakeStream/MakeStream.jsx'
import StreamFormulaE from './routes/ChatPage/StreamF-E/StreamFormulaE.jsx'
import StreamMahindra from './routes/ChatPage/StreamMahindra/StreamingPage.jsx'
import StreamPorsche from './routes/ChatPage/StreamPorsche/StreamPorsche.jsx'
import StreamMaserati from './routes/ChatPage/StreamMaserati/StreamMaserati.jsx'
import StreamVitor from './routes/ChatPage/StreamVitor/StreamVitor.jsx'
import StreamGabriel from './routes/ChatPage/StreamGabriel/StreamGabriel.jsx'
import StreamNathan from './routes/ChatPage/StreamNathan/StreamNathan.jsx'

import Register from './routes/Register/Register.jsx'
import Login from './routes/Login/Login.jsx'

import Profile from './routes/Profile/Profile.jsx'
import Settings from './routes/Settings/Settings.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InfoPage from './routes/InfoPage/InfoPage.jsx'








const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home/>  },

      { path: "/Bet", element: <Bet/>},

      { path: "/Shop", element: <Shop/>},
      { path: "/marketplace", element: <Marketplace/>},
      {  path: "/register-shop", element: <RegisterShop/>},
      {  path: "/carrinho", element: <Carrinho/>},

      { path: "/Quiz", element: <Quiz/>},
      { path: "/Silhouette", element: <Silhouette/>},

      { path: "/Ajuda", element: <Ajuda/>},
      { path: "/notifications", element: <NotificationsPage/>},

      
      { path: "/Stream", element: <Stream/>  },
      { path: "/StreamRegister", element: <StreamRegister/>  },
      { path: "/StreamMake", element: <MakeStream/> },
      { path: "/Stream/StreamMahindra", element: <StreamMahindra/>  },
      { path: "/Stream/StreamFormulaE", element: <StreamFormulaE/>  },
      { path: "/Stream/StreamPorsche", element: <StreamPorsche/>  },
      { path: "/Stream/StreamMaserati", element: <StreamMaserati/>  },
      { path: "/Stream/StreamVitor", element: <StreamVitor/> },
      { path: "/Stream/StreamGabriel", element: <StreamGabriel/> },
      { path: "/Stream/StreamNathan", element: <StreamNathan/> },

      { path: "/News", element: <News/>  },
      { path: "/News/0001", element: <News1/>  },
      { path: "/News/0002", element: <News2/>  },
      { path: "/News/0003", element: <News3/>  },
      { path: "/News/0004", element: <News4/>  },
      { path: "/News/0005", element: <News5/>  },

      { path: "/Dashboard", element: <Dashboard/>  },
      { path: "/Classifica", element: <Classifica/>  },
      { path: "/PilotoEquipe", element: <PilotoEquipe/> },
      { path: "/Corrida", element: <Corrida/>},
      { path: "/PilotCard", element: <PilotCard/>},

      { path: "/Register", element: <Register/>},
      { path: "/Login", element: <Login/>},
      { path: "/Profile", element: <Profile/>},
      { path: "/Settings", element: <Settings/>},

      { path: "/InfoPage", element: <InfoPage/>  },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
