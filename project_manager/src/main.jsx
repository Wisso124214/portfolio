import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LinksProvider from './subsystems/components/linksProvider/LinksProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <LinksProvider>
        <App2 />
      </LinksProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
