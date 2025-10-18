import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,  
)


/* 
import BrowserRouter from reactrouterdom in main.jsx 
and in navbar import router routes route from reactrouter dom
instaed of <a> we use <linl to="/"></link> to redirect  */