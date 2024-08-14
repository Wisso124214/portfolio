import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LinksProvider from './subsystems/components/linksProvider/LinksProvider.jsx'
import ContainerProfileForm from './subsystems/components/containerProfileForm/ContainerProfileForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <LinksProvider>
        <ContainerProfileForm />
      </LinksProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
