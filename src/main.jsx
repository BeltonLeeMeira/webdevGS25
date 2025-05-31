import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Solucao from './routes/Solucao.jsx'
import Sobre from './routes/Sobre.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import Error from './routes/Error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="solucao" element={<Solucao />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
